import { useQuery } from "@tanstack/react-query";
import { getSong } from "api";
import { RaceGame, Stats } from "components";
import { SongData } from "types";
import { useAuth } from "context/Auth";
import { addToStatsWPS, getStats } from "utils";

import styled from "styled-components";

const SONG_STALE_TIME_MS = 1000 * 60 * 3;

const Container = styled.div`
  max-width: 80rem;
  margin: 20px auto 0;
  min-height: 80vh;
  background-color: rgba(35, 13, 83, 0.4);
  box-sizing: border-box;
  overflow-x: hidden;
  padding: 0 10px;
`;

const Content = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Race = () => {
  const { data, isLoading, error, refetch } = useQuery<SongData, Error>({
    queryKey: ["song"],
    queryFn: getSong,
    staleTime: SONG_STALE_TIME_MS,
  });
  const { user } = useAuth();

  const { data: stats, refetch: statsRefetch } = useQuery<number[]>({
    queryKey: ["stats", user?.uid ?? "anonymous"],
    queryFn: () => getStats(user),
  });

  if (isLoading) return <div className=''>loading...</div>;
  if (error || !data) return <div className=''>{error?.message}</div>;

  return (
    <Container>
      <Content>
        <div>
          <RaceGame data={data} refetch={refetch} addStats={wps => addToStatsWPS(user, wps)} statsRefetch={statsRefetch} />
          <button onClick={() => statsRefetch()}>refetch</button>
        </div>
        <div>
          <Stats stats={stats} />
        </div>
      </Content>
    </Container>
  );
};

export default Race;
