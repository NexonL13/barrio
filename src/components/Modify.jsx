import React from "react";

const Modify = () => {
  return (
    <>
    <div className="main_header">
          <h1 className="main_title">Equipments</h1>
    </div>
      <div className="main_content">
        <div className="content_wrapper">
          <h1 class="content_title">Description</h1>
          <div className="main-box">
            <div className="main_wrapper">
              <label htmlFor="itemName" className="main_lbl">
                Equipment Name
              </label>
              <input
                type="text"
                name="itemName"
                className="main_name  main_input"
              />
            </div>
            <div className="main_wrapper">
              <label htmlFor="itemDesc" className="main_lbl">
                Equipment Description
              </label>
              <textarea
                type="text"
                name="itemDesc"
                className="main_desc main_input"
              ></textarea>
            </div>
          </div>
        </div>

        <div className="content_wrapper">
          <h1 class="content_title">Equipment Images</h1>
          <div className="main-box">
            <div className="main_upload-box">
              <span>
                <a className="upload_link" href="#">
                  Click to upload{" "}
                </a>
                or drag and drop.
              </span>
            </div>
            <div className="main_wrapper url">
              <label htmlFor="imgUrl" className="main_lbl">
                URL Link
              </label>
              <input
                type="text"
                name="imgUrl"
                className="main_url  main_input"
              />
            </div>
          </div>
        </div>

        <div className="content_wrapper span-2">
          <h1 class="content_title">Inventory</h1>
          <div className="main-box2">
            <div className="main_category">
              <p className="main_lbl">Categories</p>
              <select className="header_select w-100" name="select" id="select">
                <option value="newest">Category 1</option>
                <option value="oldest">Category 2</option>
                <option value="mostpicked">Category 3</option>
              </select>
            </div>
            <div className="quantity_wrapper">
              <label htmlFor="itemQuantity" className="main_lbl">
                Quantity
              </label>
              <input
                type="text"
                name="itemQuantity"
                className="main_quant  main_input"
              />
            </div>
            <div className="date_wrapper">
              <label forHtml="date" className="main_lbl">
                Return Date
              </label>
              <input type="date" name="date" className="main_date main_input" />
            </div>
          </div>
        </div>
        <div className="main_buttons span-2">
            <div className="add_btn">
            <button className="btn_submit">Add</button>
            </div>
            <div className="discard_btn">
            <button className="btn_submit discard">Discard</button>
            </div>
        </div>
      </div>
      </>
  );
};

export default Modify;
