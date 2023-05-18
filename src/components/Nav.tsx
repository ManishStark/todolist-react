import logo from "../assets/logo.svg";

const Nav = () => {
  return (
    <header className="container-fluid">
      <nav className="container d-flex justify-content-between align-items-center">
        <img src={logo} alt="Logo" height={50} />
        <h2 className="logo_title">Todo List</h2>
        <div className="">
          <button className="btn btn_primary me-3">Login</button>
          <button className="btn btn_secondary">SignUp</button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
