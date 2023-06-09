import { useNavigate } from "react-router-dom";
import { FullButtonWithV, BorderButtonWithX } from "../CustomComponents/Button";
import "./LocationPage.css";
import RosPic from "../CustomComponents/RosPic/RosPic";

const LocationPage = () => {
  const navigate = useNavigate();
  const getLocation = async () => {
    try {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const response = await fetch(
          `https://geocode.maps.co/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}`
        );
        const data = await response.json();
        console.log(data.display_name);
      });
      navigate("/form");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="page location-page ">
      <p>
        שימי לב ,המידע המובא מחייב אותנו להפעיל את מיקומך. הפרטים ישמרו אצלנו.
      </p>
      <RosPic />
      <FullButtonWithV content="מסכימה" click={getLocation} />
      <BorderButtonWithX
        content="מוותרת כרגע"
        click={() => navigate("/form")}
      />

      <div>
        חשוב להדגיש שאין כאן שום תחליף לגופים המתמקצעים באלימות במשפחה ותמיד
        כדאי במקרה של סכנה לפנות למשטרה!{" "}
      </div>
    </div>
  );
};

export default LocationPage;
