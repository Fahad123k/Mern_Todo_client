import React from "react";
import Navbar from "../../components/Navbar";
import Todo from "../../assets/images/todo.jpg";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Navbar />
      <section>
        <div className="container mx-auto  p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class=" text-white p-6  justify-center m-auto">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-blue-900 leading-relaxed sm:leading-loose lg:leading-snug text-center lg:text-left">
                Elevate Your Task <br /> Management with <br /> TODO!
              </h1>

              <div className="text-center sm:text-center lg:text-left">
                <Link
                  to="/login"
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-200 text-blue-900  py-2 px-4 ml-4 rounded hover:bg-blue-500  hover:text-white"
                >
                  Register
                </Link>
              </div>
            </div>

            <div class=" text-white p-6   ">
              {/* <h2 class="text-2xl font-bold mb-4">Section 2</h2> */}
              <div className="text-center">
                <img src={Todo} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
