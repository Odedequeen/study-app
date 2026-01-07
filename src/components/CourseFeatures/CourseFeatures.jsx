import React from "react";
import "./CourseFeatures.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import Card from "../Card/Card";
// import CheckoutOIcon from "../../assets/Icons/CheckoutOIcon.svg";

export default function CourseFeatures() {
  const courses = [
    {
      id: 1,
      title: "UI Statistics Data Science And Business Analysis",
      instructor: "Angela in Development",
      rating: 4.7,
      price: 60,
      originalPrice: 120,
      image: "/src/assets/Images/AnyStit.svg",
    },
    {
      id: 2,
      title: "UI Statistics Data Science And Business Analysis",
      instructor: "Angela in Development",
      rating: 4.7,
      price: 60,
      originalPrice: 120,
      image: "/src/assets/Images/AnyEaxm2.svg",
    },
    {
      id: 3,
      title: "UI Statistics Data Science And Business Analysis",
      instructor: "Angela in Development",
      rating: 4.7,
      price: 60,
      originalPrice: 120,
      image: "/src/assets/Images/AnyData.svg",
    },
  ];

  return (
    <section className="course-features-section">
      <div className="course-features-container">
        {/* Header Section */}
        <SectionTitle
          title="Check Out Educate Features Win Any Exam"
          subtitle="TOP POPULAR COURSE"
        />

        <div className="features-meta">
          {/* <img src={CheckoutOIcon} alt="icon" className="features-icon" /> */}
          <span className="subtle-text">TOP POPULAR COURSE</span>
        </div>

        {/* Courses Grid */}
        <div className="course-features-grid">
          {courses.map((course) => (
            <Card key={course.id} className="course-card">
              {/* Image Section */}
              <div className="course-card-image">
                <img src={course.image} alt={course.title} />
                <span className="course-badge">Development</span>
              </div>

              {/* Content Section */}
              <div className="course-card-content">
                <h3 className="course-card-title">{course.title}</h3>

                {/* Icons Row */}
                <div className="course-card-icons">
                  <span>📘 Lesson 10</span>
                  <span>⏱ 19h 30m</span>
                  <span>👥 Students 20+</span>
                </div>
              </div>

              <hr className="course-card-divider" />

              {/* Rating */}
              <div className="course-card-rating">
                {"★".repeat(Math.floor(course.rating))}
                {"☆".repeat(5 - Math.floor(course.rating))}
                <span> ({course.rating})</span>
              </div>

              {/* Instructor */}
              <p className="course-card-instructor">By {course.instructor}</p>

              {/* Price */}
              <div className="course-card-price">
                <span className="current">${course.price}</span>
                <span className="original">${course.originalPrice}</span>
              </div>

              {/* Button */}
              <div className="course-card-button">
                <Button variant="primary" size="small">
                  Browse Edunity Courses
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

//  import React from "react";
// // import "./CourseFeatures.css";
// // import SectionTitle from "../SectionTitle/SectionTitle";
// // import Button from "../Button/Button";
// // import Card from "../Card/Card"
// // import Checkout0Icon from "../../assets/Icons/Checkout0Icon.svg";

// export default function CourseFeatures() {
//   const courses = [
//     {
//       id: 1,
//       title: "UI Statistics Data Science And Business Analysis",
//       instructor: "Angela in Development",
//       rating: 4.7,
//       price: 60,
//       originalPrice: 120,
//       image: "/src/assets/Images/AnyStit.svg",
//     },
//     {
//       id: 2,
//       title: "UI Statistics Data Science And Business Analysis",
//       instructor: "Angela in Development",
//       rating: 4.7,
//       price: 60,
//       originalPrice: 120,
//       image: "/src/assets/Images/AnyEaxm2.svg",
//     },
//     {
//       id: 3,
//       title: "UI Statistics Data Science And Business Analysis",
//       instructor: "Angela in Development",
//       rating: 4.7,
//       price: 60,
//       originalPrice: 120,
//       image: "/src/assets/Images/AnyData.svg",
//     },
//   ];

//   return (
//         section
//    <section className="course-features-section">

//       <div className="course-features-container">
//         {/* Header Section */}
//         <SectionTitle
//           title="Check Out Educate Features Win Any Exam"
//           subtitle="TOP POPULAR COURSE"
//         />

//         <div className="features-meta">
//           <img src={Checkout0Icon} alt="icon" className="features-icon" />
//           <span className="subtle-text">TOP POPULAR COURSE</span>
//         </div>

//         {/* Courses Grid */}
//         <div className="course-features-grid">
//           {courses.map((course) => (
//             <Card key={course.id} className="course-card">
//               {/* Image Section */}
//               <div className="course-card-image">
//                 <img src={course.image} alt={course.title} />
//                 <span className="course-badge">Development</span>
//               </div>

//               {/* Content Section */}
//               <div className="course-card-content">
//                 <h3 className="course-card-title">{course.title}</h3>

//                 {/* Icons Row */}
//                 <div className="course-card-icons">
//                   <span>📘 Lesson 10</span>
//                   <span>⏱ 19h 30m</span>
//                   <span>👥 Students 20+</span>
//                 </div>
//               </div>

//               <hr className="course-card-divider" />

//               {/* Rating */}
//               <div className="course-card-rating">
//                 {"★".repeat(Math.floor(course.rating))}
//                 {"☆".repeat(5 - Math.floor(course.rating))}
//                 <span> ({course.rating})</span>
//               </div>

//               {/* Instructor */}
//               <p className="course-card-instructor">By {course.instructor}</p>

//               {/* Price */}
//               <div className="course-card-price">
//                 <span className="current">${course.price}</span>
//                 <span className="original">${course.originalPrice}</span>
//               </div>

//               {/* Button */}
//               <div className="course-card-button">
//                 <Button variant="primary" size="small">
//                   Browse Edunity Courses
//                 </Button>
//               </div>
//             </Card>
//           ))}
//          </div>
//       </div>
//     </section>

//   )
// }
