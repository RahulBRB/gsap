import { useGSAP } from "@gsap/react";

const GsapTo = () => {
  useGSAP(()=>{
    // The gsap.to() method is used to animate elements from their current state to a new state.
    // (target, {properties}, duration)
    gsap.to("#blue-box", {
      x:250,        // Move the element 250px to the right
      repeat: -1,   // Repeat the animation infinitely
      yoyo: true,   // Reverse the animation
      rotation: 360, // Rotate the element 360 degrees
      duration: 2,  // Duration of the animation
      ease: "elastic" // Easing function
    })
  }, []);

  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="blue-box" className="w-20 h-20 bg-blue-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapTo;
