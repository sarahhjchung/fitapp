import "./Form.css";

import { ReactComponent as Title } from "./assets/title_black_24dp.svg";
import { ReactComponent as Name } from "./assets/face_black_24dp.svg";
import { ReactComponent as Calories } from "./assets/monitor_weight_black_24dp.svg";
import { ReactComponent as Intensity } from "./assets/monitor_heart_black_24dp.svg";
import { ReactComponent as Time } from "./assets/schedule_black_24dp.svg";

function CardioForm() {
  return (
    <div>
      <form action="action_page.php" className="form grid-form">
        <div className="grid-form-left">
          <>
            <Title />
            <input
              type="text"
              className="input"
              id="title"
              name="title"
              placeholder="Title"
            />
            <br />
          </>
          <>
            <Name />
            <input
              type="text"
              className="input"
              id="name"
              name="name"
              placeholder="Your name"
            />
            <br />
          </>
          <>
            <Calories />
            <input
              type="text"
              className="input"
              id="calories"
              name="calories"
              placeholder="Calories burned"
            />
            <br />
          </>
          <>
            <Intensity />
            <input
              type="text"
              className="input"
              id="intensity"
              name="intensity"
              placeholder="Intensity of exercise"
            />
            <br />
          </>
          <>
            <Time />
            <input
              type="text"
              className="input"
              id="time"
              name="time"
              placeholder="Length of exercise"
            />
            <br />
          </>
        </div>
        <div className="grid-form-right">
          <label for="content">Write a short blurb!</label>
          <br />
          <textarea
            type="text"
            className="input"
            id="content"
            name="content"
            rows="10"
            cols="30"
            placeholder="enter here..."
          />
          <br />
        </div>
      </form>
      <form method="get" action="/thankyou">
        <button className="post" type="submit">
          Post
        </button>
      </form>
    </div>
  );
}

export default CardioForm;
