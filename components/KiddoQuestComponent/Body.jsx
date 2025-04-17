"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusAlt, faFutbol, faHome, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const facilities = [
  {
   title: "School Bus",
    description:
      "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
      icon: <FontAwesomeIcon icon={faBusAlt} className="fa-2x text-success" />,
      bgColor: "#FEE2E2",
    hoverBgColor: "#EF4444",
    textColor: "#DC2626",
  },
  {
    title: "Playground",
    description:
      "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
    icon: <FontAwesomeIcon icon={faFutbol} className="fa-2x text-success" />,
    bgColor: "#DCFCE7",
    hoverBgColor: "#22C55E",
    textColor: "#15803D",
  },
  {
    title: "Healthy Canteen",
    description:
      "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
    icon: <FontAwesomeIcon icon={faHome} className="fa-2x text-warning" />,
    bgColor: "#FEF9C3",
    hoverBgColor: "#EAB308",
    textColor: "#CA8A04",
  },
  {
    title: "Positive Learning",
    description:
      "Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero ipsum sit",
    icon: <FontAwesomeIcon icon={faChalkboardTeacher} className="fa-2x text-info" />,
    bgColor: "#DBEAFE",
    hoverBgColor: "#3B82F6",
    textColor: "#1D4ED8",
  },
];

const SchoolFacilities = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        width: "100%",
      }}
    >
      <div style={{ padding: "4px", textAlign: "center" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#1F2937",
            marginBottom: "24px",
            fontFamily: "'Lobster Two', cursive"
          }}
        >
          School Facilities
        </h2>
        <p style={{ color: "#6B7280", fontSize: "1rem", marginBottom: "40px" }}>
          Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
          lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
          dolor duo.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "32px",
            marginTop: "120px",
          }}
        >
          {facilities.map((facility, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                padding: "24px",
                borderRadius: "9999px",
                backgroundColor: facility.bgColor,
                transition: "all 0.3s",
                cursor: "pointer",
                position: "relative",
                height: "250px",
                width: "260px",
                top: "60px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = facility.hoverBgColor;
                const icon = e.currentTarget.querySelector(".icon");
                if (icon) icon.style.color = "#FFFFFF";
                const title = e.currentTarget.querySelector(".title");
                const leftHorn = e.currentTarget.querySelector(".left-horn");
                const rightHorn = e.currentTarget.querySelector(".right-horn");
                const description =
                  e.currentTarget.querySelector(".description");

                if (icon) {
                  icon.style.backgroundColor = facility.hoverBgColor;
                  icon.style.color = "#FFFFFF";
                }
                if (title) title.style.color = "#FFFFFF";
                if (description) description.style.color = "#FFFFFF";
                if (leftHorn)
                  leftHorn.style.backgroundColor = facility.hoverBgColor;
                if (rightHorn)
                  rightHorn.style.backgroundColor = facility.hoverBgColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = facility.bgColor;
                const icon = e.currentTarget.querySelector(".icon");
                if (icon) icon.style.color = facility.textColor;
                const title = e.currentTarget.querySelector(".title");
                const description =
                  e.currentTarget.querySelector(".description");
                const leftHorn = e.currentTarget.querySelector(".left-horn");
                const rightHorn = e.currentTarget.querySelector(".right-horn");

                if (icon) {
                  icon.style.backgroundColor = facility.bgColor;
                  icon.style.color = facility.textColor;
                }
                if (title) title.style.color = facility.textColor;
                if (description) description.style.color = "#4B5563";
                if (leftHorn) leftHorn.style.backgroundColor = facility.bgColor;
                if (rightHorn)
                  rightHorn.style.backgroundColor = facility.bgColor;
              }}
            >
              <div
                className="icon"
                style={{
                  position: "absolute",
                  top: "-100px",
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "50%",
                  backgroundColor: facility.bgColor,
                  fontSize: "1.5rem",
                  color: facility.textColor,
                  transition: "all 0.3s",
                }}
              >
                <div
                  className="left-horn"
                  style={{
                    position: "absolute",
                    top: "1px",
                    left: "-3px",
                    width: "15px",
                    height: "25px",
                    backgroundColor: facility.bgColor,
                    borderRadius: "50% 50% 0 0",
                    transform: "rotate(-30deg)",
                    transition: "all 0.3s",
                  }}
                />

                <div
                  className="right-horn"
                  style={{
                    position: "absolute",
                    top: "1px",
                    right: "-3px",
                    width: "15px",
                    height: "25px",
                    backgroundColor: facility.bgColor,
                    borderRadius: "50% 50% 0 0",
                    transform: "rotate(30deg)",
                    transition: "all 0.3s",
                  }}
                />

                {facility.icon}
              </div>

              <h3
                className="title"
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginTop: "50px",
                  color: facility.textColor,
                  transition: "color 0.3s",
                }}
              >
                {facility.title}
              </h3>
              <p
                className="description"
                style={{
                  fontSize: "0.875rem",
                  color: "#4B5563",
                  marginTop: "8px",
                  transition: "color 0.3s",
                }}
              >
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolFacilities;
