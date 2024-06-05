import Profile from "../assets/Profile.png"
import "../component-CSS/About.css"

export default function Aboutme() {
  return (
    <div>
      <div id="About-Container">
        <section>
          <h2>Web Developer</h2>
          <p>
            As a dedicated and passionate web developer with 1 year of
            experience, I specialize in creating dynamic and responsive websites
            using a range of technologies including HTML, CSS, JavaScript, and
            frameworks such as React and Svelte. My strong foundation in both
            front-end and back-end development, combined with a keen eye for
            design and detail, allows me to build seamless user experiences and
            robust web applications.
          </p>
          <button>Download CV</button>
          <button>Contact</button>
        </section>
        <>
          <img src={Profile} alt="Mypicture" />
        </>
      </div>

      <section id="svg">
        <a
          href="https://www.facebook.com/profile.php?id=100006962520513"
          rel="Facebook"
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              fill="#1877F2"
              d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
            />
            <path
              fill="#ffffff"
              d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
            />
          </svg>
        </a>
        <a
          href="https://myaccount.google.com/?utm_source=OGB&utm_medium=app"
          rel="Gmail"
        >
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 32 32"
            data-name="Layer 1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z"
              fill="#ea4435"
            />
            <path
              d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z"
              fill="#00ac47"
              transform="translate(53.0001 32.0007) rotate(180)"
            />
            <path
              d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z"
              fill="#ffba00"
            />
            <path
              d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z"
              fill="#4285f4"
            />
            <path
              d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z"
              fill="#c52528"
            />
          </svg>
        </a>
        <a href="https://join.skype.com/invite/tapcHFg8prOL" rel="Skype">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="10.5" cy="10" rx="8.5" ry="8" fill="#184AA9" />
            <circle cx="22" cy="22" r="8" fill="#2173F0" />
            <circle cx="16" cy="16" r="13" fill="url(#paint0_linear_87_7255)" />
            <path
              d="M16.0688 9C18.1822 9 21 10 20.2955 11.3333C19.3327 13.1557 17.4777 11.3333 16.0688 11.3333C14.6598 11.3333 13.9554 12 13.9554 12.6667C13.9554 13.3333 14.3076 14 16.0688 14.6667C17.8299 15.3333 21 16.3333 21 19C21 21.6667 18.5344 23 15.3643 23C12.5245 23 10.4331 21.6667 11.1375 20.3333C11.9477 18.8 13.9554 20.6667 15.3643 20.6667C16.7732 20.6667 18.1822 20.3333 18.1822 19C18.1822 17.6667 16.0687 17.3333 14.6598 16.6667C12.8986 15.8333 11.1375 15 11.1375 12.6667C11.1375 10.3333 13.9554 9 16.0688 9Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_87_7255"
                x1="5.88889"
                y1="8.05556"
                x2="25.3889"
                y2="24.3056"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#297AC0" />
                <stop offset="1" stop-color="#48B0F9" />
              </linearGradient>
            </defs>
          </svg>
        </a>
      </section>
    </div>
  );
}
