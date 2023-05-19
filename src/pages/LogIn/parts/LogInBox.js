// import Logo from 'components/Logo/Logo';
// import GoogleLogin from './GoogleLogin';
import Button from 'components/Buttons/Button';
import { labels } from 'helpers';

const googleImg = require('assets/img/google.svg').default;
const logoImg = require('assets/img/logo.jpg');

const { logo_text,
        signInBtn,
        google_login,
        login_remember_me,
        forgot_password,
        username,
        password
      } = labels;

const LogInBox = ({ onSuccessGGLogin, onFailureGGLogin, errorMessage }) => {
  return (
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-xl font-bold ">{logo_text}</h6>
                </div>

                <div className="flex content-center items-center justify-center mb-4">
                  <img alt="..." src={logoImg} className="align-middle border-none  w-1/4 h-auto" />
                </div>
                <hr className="mt-2 border-b-1 border-blueGray-300" />
              </div>

              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <form>
                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      {username}
                    </label>
                    <input
                      type="username"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Name"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="grid-password">
                      {password}
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>

                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border border-blueGray-300 bg-white rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">{login_remember_me}</span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <Button
                      name={signInBtn}
                      onClick={() => {
                        window.location.href = '/admin/energy_monitor';
                      }}
                    />
                  </div>
                  <div className="flex flex-wrap mt-6 relative">
                    <div className="w-1/2">
                      <a href="#pablo" onClick={e => e.preventDefault()} className="text-black">
                        <small>{forgot_password}</small>
                      </a>
                    </div>
                    <div className="w-1/2 text-right ">
                      <div className="btn-wrapper text-center">
                        <button
                          className="bg-white w-full text-center active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none  mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                          type="button"
                        >
                          <img alt="..." className="w-5 mr-8" src={googleImg} />
                          {google_login}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogInBox;
