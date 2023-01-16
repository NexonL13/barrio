import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div class="row dropright-lg">
      <div class="col-4">
        <ul class="list-unstyled">
          <li class="dropdown">
            <a
              class="rounded-circle"
              href="#"
              role="button"
              id="dropdownUser"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="avatar avatar-md avatar-indicators avatar-online">
                <img
                  alt="avatar"
                  src="https://via.placeholder.com/40x40

"
                  class="rounded-circle"
                />
              </div>
            </a>
            <div class="dropdown-menu pb-2" aria-labelledby="dropdownUser">
              <div class="dropdown-item">
                <div class="d-flex py-2">
                  <div class="avatar avatar-md avatar-indicators avatar-online">
                    <img
                      alt="avatar"
                      src="https://via.placeholder.com/40x40"
                      class="rounded-circle"
                    />
                  </div>
                  <div class="ml-3 lh-1">
                    <h5 class="mb-0">Full Name</h5>
                    <p class="mb-0">example@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <div class="">
                <ul class="list-unstyled">
                  <li>
                    <Link
                      to="/"
                      class="dropdown-item"
                      href="@@webRoot/pages/profile-edit.html"
                    >
                      <span class="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </span>
                      Notification{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      class="dropdown-item"
                      href="@@webRoot/pages/profile-edit.html"
                    >
                      <span class="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </span>
                      Profile{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/status"
                      class="dropdown-item"
                      href="@@webRoot/pages/student-subscriptions.html"
                    >
                      <span class="mr-2">
                        <svg
                          fill="#000000"
                          width="14px"
                          height="14px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M20.929,1.628A1,1,0,0,0,20,1H4a1,1,0,0,0-.929.628l-2,5A1.012,1.012,0,0,0,1,7V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V7a1.012,1.012,0,0,0-.071-.372ZM4.677,3H19.323l1.2,3H3.477ZM3,21V8H21V21Zm8-3a1,1,0,0,1-1,1H6a1,1,0,0,1,0-2h4A1,1,0,0,1,11,18Z"></path>
                          </g>
                        </svg>
                      </span>
                      Borrowed Status{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" class="dropdown-item" href="#!">
                      <span class="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-settings"
                        >
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                      </span>
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="dropdown-divider"></div>
              <ul class="list-unstyled">
                <li>
                  <Link
                    to="/"
                    class="dropdown-item"
                    href="@@webRoot/index.html"
                  >
                    <span class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-power"
                      >
                        <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                        <line x1="12" y1="2" x2="12" y2="12"></line>
                      </svg>
                    </span>
                    Sign Out{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
