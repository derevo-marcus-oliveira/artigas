import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <nav class="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid p-3">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"></a>
          </div>
        </div>
      </nav>


      <div className="container">
        <Outlet />
      </div>


      <footer class="bd-footer py-4 py-md-5 mt-5 bg-dark" data-bs-theme="dark">
        <div class="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
          <div class="row">
            <h1></h1>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
