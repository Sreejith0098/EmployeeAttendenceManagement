import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-dark text-white pt-5 pb-3">
        <div class="container">
          <div class="row">
            <div class="col-md-4 mb-4">
              <h5>About</h5>
              <p>
                This system helps manage employee attendance efficiently using
                the MERN stack.
              </p>
            </div>

            <div class="col-md-4 mb-4">
              <h5>Quick Links</h5>
              <ul class="list-unstyled">
                <li>
                  <a href="#" class="text-white text-decoration-none">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white text-decoration-none">
                    Employees
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white text-decoration-none">
                    Reports
                  </a>
                </li>
                <li>
                  <a href="#" class="text-white text-decoration-none">
                    Settings
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-md-4 mb-4">
              <h5>Contact</h5>
              <p>Email: support@example.com</p>
              <p>Phone: +91-1234567890</p>
            </div>
          </div>

          <hr class="border-secondary" />

          <div class="text-center">
            <p class="mb-0">
              &copy; 2025 Employee Attendance Management System | Developed by
              Your Name
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
