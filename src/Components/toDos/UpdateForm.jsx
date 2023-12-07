import React from "react";

const UpdateForm = (props) => {
  return (
    <>
      <div className="row mb-3">
        <div className="col">
          <input
            type="text"
            value={props.updateData && props.updateData.title}
            onChange={props.changeTask}
            className="form-control form-control-lg"
          />
        </div>
        <div className="col-auto">
          <button
            onClick={props.updateTask}
            className="btn btn-sm btn-info mr-20"
          >
            Update
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={props.cancelUpdate}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
