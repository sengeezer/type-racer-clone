import Link from "next/link";
import { useAuth } from "context/Auth";
import { logout } from "firedb";
import { useRouter } from "next/router";
import * as S from "./Navbar.style";

const Navbar = () => {
  const { user, isLoading } = useAuth();

  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  return (
    <S.Bar>
      <S.Toolbar>
        <S.GhostButton type='button' aria-label='menu'>
          ☰
        </S.GhostButton>
        {isLoading && <div>load...</div>}
        {!user && !isLoading && (
          <Link href='/auth' passHref legacyBehavior>
            <S.ButtonLink>Sign in</S.ButtonLink>
          </Link>
        )}
        {!!user && !isLoading && (
          <S.Flex>
            <S.UserName>{user.displayName}</S.UserName>
            <Link href={`/profile/${user.displayName}`} passHref legacyBehavior>
              <S.AccountLink>Profile</S.AccountLink>
            </Link>
            <S.ActionButton type='button' onClick={handleLogout}>
              Logout
            </S.ActionButton>
          </S.Flex>
        )}
      </S.Toolbar>
    </S.Bar>
  );
};

export default Navbar;
