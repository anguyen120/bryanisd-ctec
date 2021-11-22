export default function Header() {

  return (
    <div className="navbar bg-transparent px-8 pt-8">
      <div className="flex-1 px-2 lg:flex-none">
        <img href="#" class="object-scale-down w-1/2" src="/logo-white.svg" />
        <a href="#" className="font-mono ml-3 text-xl text-primary-content">
          Career + Technical Education Complex
        </a>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="btn btn-ghost rounded-btn text-primary-content"
            >
              Parents
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52 "
            >
              <li>
                <a>21-22 Update Center</a>
              </li>
              <li>
                <a>New Student Registration</a>
              </li>
              <li>
                <a>Transportation</a>
              </li>
              <li>
                <a>Parents/Students Helpful Links &amp; Info</a>
              </li>
              <li>
                <a>Safety &amp; Security</a>
              </li>
              <li>
                <a>ClassLink</a>
              </li>
              <li>
                <a>Parent Portal</a>
              </li>
              <li>
                <a>Academic Calendar</a>
              </li>
              <li>
                <a>Maps</a>
              </li>
              <li>
                <a>Meal Application and Menus</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="btn btn-ghost rounded-btn text-primary-content"
            >
              Employees
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Bryan Brag</a>
              </li>
              <li>
                <a>New Employee Information</a>
              </li>
              <li>
                <a>
                  Intranet/Email Login (Including Frontline Absence Management)
                </a>
              </li>
              <li>
                <a>Employee Health Center</a>
              </li>
              <li>
                <a>Employee Access Center</a>
              </li>
              <li>
                <a>Eduphoria</a>
              </li>
              <li>
                <a>Employee Awards and Recognition</a>
              </li>
              <li>
                <a>Safety &amp; Security</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="btn btn-ghost rounded-btn text-primary-content"
            >
              Programs
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Advanced Academics</a>
              </li>
              <li>
                <a>Dual Language</a>
              </li>
              <li>
                <a>Career &amp; Technical Education (CTE)</a>
              </li>
              <li>
                <a>Prekindergarten (PreK)</a>
              </li>
              <li>
                <a>Hammond-Oliver Health Sciences Academy</a>
              </li>
              <li>
                <a>Fine Arts</a>
              </li>
              <li>
                <a>Athletics</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="btn btn-ghost rounded-btn text-primary-content"
            >
              Schools
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>New Student Registration</a>
              </li>
              <li>
                <a>Elementary Schools</a>
              </li>
              <li>
                <a>Intermediate Schools</a>
              </li>
              <li>
                <a>Middle Schools</a>
              </li>
              <li>
                <a>High Schools</a>
              </li>
              <li>
                <a>Learn More About Bryan ISD Schools</a>
              </li>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="btn btn-ghost rounded-btn text-primary-content"
            >
              More
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>New Student Registration</a>
              </li>
              <li>
                <a>Superintendent</a>
              </li>
              <li>
                <a>Departments</a>
              </li>
              <li>
                <a>Vision, Mission &amp; Goals</a>
              </li>
              <li>
                <a>Board of Trustees</a>
              </li>
              <li>
                <a>Essential Eight</a>
              </li>
              <li>
                <a>Bryan ISD Bond Plan</a>
              </li>
              <li>
                <a>Safety &amp; Security</a>
              </li>
              <li>
                <a>Careers</a>
              </li>
              <li>
                <a>"Grow With Us"</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="hidden mobile-menu">
          <ul class="">
            <li class="active">
              <a
                href="index.html"
                class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
