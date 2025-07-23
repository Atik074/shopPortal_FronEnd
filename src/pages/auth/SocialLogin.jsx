const SocialLogin = () => {
    return (
<button
  type="button"

  className="w-full relative overflow-hidden flex items-center justify-center gap-3 px-4 py-[10px] rounded-lg border border-gray-300 bg-white hover:bg-blue-700 hover:text-white text-gray-800 font-medium transition-all duration-500"
  
>
  <img
    src="https://www.svgrepo.com/show/475656/google-color.svg"
    alt="Google"
    className="w-5 h-5 z-10"
  />
  <span className="z-10">Continue with Google</span>
</button>



    );
};

export default SocialLogin;