import Link from "next/link";
import * as S from "./Hero.styles";

const Hero = () => {
  return (
    <S.Container>
      <S.Title>Typeracer Clone</S.Title>
      <S.Subtitle>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure alias,
        error cum, sunt repellat impedit hic nihil ab animi deserunt soluta
        molestiae iste ex nisi reiciendis facilis consequuntur! Illo,
        praesentium!
      </S.Subtitle>
      <Link href='/race' passHref legacyBehavior>
        <S.ActionLink>Join Race</S.ActionLink>
      </Link>
    </S.Container>
  );
};

export default Hero;
