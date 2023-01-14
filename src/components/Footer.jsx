import React from "react";

const footer = () => {
  return (
    <div class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6">
            <h6>About</h6>
            <p class="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti, asperiores quaerat quos hic sint atque, maxime nisi perferendis iusto et inventore, repudiandae vitae enim nihil. Voluptas debitis laudantium sunt tenetur totam dignissimos, dolorem eaque voluptate ducimus ipsam, magnam sapiente laboriosam commodi perferendis? Ipsum iusto repellendus animi dolorum exercitationem saepe quia!
            </p>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul class="footer-links">
              <li>
                <a href="/">Emergency Kit</a>
              </li>
              <li>
                <a href="/">
                  Fire Rescue Kit
                </a>
              </li>
              <li>
                <a href="/">
                  Utilities
                </a>
              </li>
              <li>
                <a href="/">
                  Outdoor
                </a>
              </li>
            </ul>
          </div>

          <div class="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul class="footer-links">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/contribute">
                  Contribute
                </a>
              </li>
              <li>
                <a href="/policy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-sm-6 col-xs-12">
            <p class="copyright-text">
              Copyright &copy; 2023 All Rights Reserved by &nbsp;
              <a href="#">Barrio</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
