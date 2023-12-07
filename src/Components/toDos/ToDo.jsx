import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ToDo = (props) => {
  console.log(props.toDo);

  return (
    <>
      {props.toDo.map((task, index) => {
        return (
          <React.Fragment key={task.id}>
            <div className="col taskBg">
              <div className={task.completed ? "done" : ""}>
                <span className="taskNumber">{index + 1}</span>
                <span className="taskText">{task.title}</span>
              </div>
              <div className="iconsWrap">
                <div>
                  <input
                    className="checkbox1"
                    type="checkbox"
                    checked={task.completed}
                    title="Completed"
                    onClick={(e) => props.markDone(task.id)}
                  />
                </div>

                {task.completed ? null : (
                  <div>
                    <span
                      title="Edit"
                      onClick={() =>
                        props.setUpdateData({
                          id: task.id,
                          title: task.title,
                          completed: task.completed ? true : false,
                        })
                      }
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </span>
                  </div>
                )}
                <div>
                  <span
                    title="Delete"
                    onClick={() => props.deleteTask(task.id)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default ToDo;
