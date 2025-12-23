import { useNavigate } from "react-router";

export default function Header({ content, children }) {
  const navigator = useNavigate();
  function logout() {
    const response = confirm("Are You Sure you want to logout ?");
    if (response) {
      localStorage.setItem("loggedin", false);
      navigator("/");
      location.reload();
    }
  }
  return (
    <header>
      {content}
      {children}
      <div>
        {localStorage.getItem("currentuser")}
        <button onClick={logout}>Log out</button>
      </div>
    </header>
  );
}
