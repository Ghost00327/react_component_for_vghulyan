import "tailwindcss/tailwind.css"
import top from '../img/top.png';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';

function App() {
  return (
    <div
      class="
        min-w-screen
        h-screen
        animated
        fadeIn
        faster
        fixed
        left-0
        top-0
        flex
        justify-center
        items-center
        inset-0
        z-50
        outline-none
        focus:outline-none
        bg-no-repeat bg-center bg-cover
      "
      id="modal-id"
    >
      <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
      <div
        class="relative min-h-screen flex flex-col items-center justify-center"
      >
        <div class="grid mt-8 gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
          <div class="flex flex-col">
            <div class="bg-white shadow-md rounded-2xl p-2">
              <div class="flex-none lg:flex">
                <div class="h-full w-full lg:h-48 lg:w-48 lg:mb-0 mb-3">
                  <img
                    src={top}
                    alt="Just a flower"
                    class="
                      w-full
                      object-scale-down
                      lg:object-cover lg:h-48
                      rounded-2xl
                    "
                  />
                </div>
                <div class="flex-auto lg:ml-3 justify-evenly lg:py-2">
                  <div class="flex flex-wrap ">
                    <div
                      class="w-full flex-none text-3xl text-black-700 font-bold pb-2 ml-3"
                    >
                      Fort De France Airport
                    </div>
                        <canvas class="ml-3" id="myCanvas" width="20%" height="5" style={{backgroundColor:"#ed3749"}}>
                            Your canvas tag.
                        </canvas>
                    <div
                      class="w-full flex-none text-3xl text-700 font-medium pt-2 ml-3"
                    >
                      Martinque
                    </div>
                  </div>
                  <div class="flex lg:py-4 text-sm text-gray-600 " style={{backgroundColor:"#ed3749"}}>
                    <h1 class="text-xl text-white ml-3">FROM <span class="text-3xl font-bold">€17</span> PER DAY</h1>
                  </div>
                  <div class="flex space-x-3 text-sm font-medium pb-3" style={{backgroundColor:'#ed3749'}}>
                    <button
                      class="
                        mb-2
                        md:mb-0
                        bg-white
                        text-black-600
                        font-bold
                        px-5
                        py-2
                        shadow-sm
                        tracking-wider
                        rounded-2px
                        hover:bg-gray-200
                        ml-3
                        rounded
                        
                      "
                      type="button"
                      aria-label="like"
                    >
                      <p>BOOK NOW <PlayCircleOutlineOutlinedIcon /></p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;