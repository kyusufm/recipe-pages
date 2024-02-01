import { Young_Serif } from "next/font/google";
import Image from "next/image";

const youngserif = Young_Serif({ subsets: ["latin"], weight:["400"] });

export default function Home() {
  return (
    <main className="bg-eggshell min-h-screen flex items-center justify-center p-16">
      <div className="max-w-2xl p-8 bg-white rounded-3xl shadow-md w-full">
        <Image
          src="/images/image-omelette.jpeg"
          alt="Omelette image"
          className="rounded-lg mb-6"
          width={1440}
          height={400}
          priority
        />

        <h1 className={`${youngserif.className} text-3xl font-bold mb-4 dark-charcoal`}  >Simple Omelette Recipe</h1>
        <p className="mb-6">
          An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.
        </p>

        <div className="rose-white rounded-md p-2 ">
          <h3 className="dark-raspberry p-3 text-lg font-semibold"> Preparation time </h3>
          <ul className="list-disc ml-8 dark-raspberry pb-4">
            <li><strong>Total</strong>: Approximately 10 minutes</li>
            <li><strong>Preparation</strong>: 5 minutes</li>
            <li><strong>Cooking</strong>: 5 minutes</li>
          </ul>
        </div>

        <div className="ingredients">
          <h2 className={`nutmeg text-3xl p-4 ${youngserif.className}`}> Ingredients </h2>
          <ul className="list-disc ml-4 ">
            <li> 2-3 large eggs</li>
            <li> Salt, to taste</li>
            <li> Pepper, to taste</li>
            <li> 1 tablespoon of butter or oil</li>
            <li> Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>

        <hr className="my-4" />

        <div className="instruction">
          <h2 className={`nutmeg text-3xl p-4 ${youngserif.className}`}> Instructions </h2>
          <ul className="list-decimal ml-4">
            <li><strong>Beat the eggs</strong>: In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. 
  You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li>  <strong>Heat the pan</strong>: Place a non-stick frying pan over medium heat and add butter or oil.
</li>
            <li><strong>Cook the omelette</strong>: Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure 
  the eggs evenly coat the surface.</li>
            <li><strong>Add fillings (optional)</strong>: When the eggs begin to set at the edges but are still slightly runny in the 
  middle, sprinkle your chosen fillings over one half of the omelette.</li>
            <li><strong>Fold and serve</strong>: As the omelette continues to cook, carefully lift one edge and fold it over the 
  fillings. Let it cook for another minute, then slide it onto a plate.</li>
            <li><strong>Enjoy</strong>: Serve hot, with additional salt and pepper if needed.</li>
          </ul>
          <p className="wenge-brown text-lg mt-4"></p>
        </div>

        <hr className="my-4" />

        <div className="nutrition">
          <h2 className={`nutmeg text-3xl p-4 ${youngserif.className}`}>Nutrition</h2>
          <div className="nutrition-table">
            <div className="p-3 flex items-center border-b cursor-pointer hover:bg-gray-200 ">
                <div className="flex items-left w-1/2 pl-4">
                  <div className="leading-snug wenge-brown ">Calories</div>
                </div>
                <div className="flex items-left w-1/2 pl-4">
                  <div className="leading-snug nutmeg font-semibold">277kcal</div>
                </div>
            </div>

            <div className="p-3 flex items-center border-b cursor-pointer hover:bg-gray-200 ">
                <div className="flex items-left w-1/2 pl-4">
                  <div className="leading-snug wenge-brown ">Carbs</div>
                </div>
                <div className="flex items-left w-1/2 pl-4">
                  <div className="leading-snug nutmeg font-semibold">0g</div>
                </div>
            </div>

            <div className="p-3 flex items-center border-b cursor-pointer hover:bg-gray-200 ">
                <div className="flex items-left w-1/2 pl-4">
                  <div className="leading-snug wenge-brown ">Protein</div>
                </div>
                <div className="flex items-left w-1/2 pl-4">
                  <div className="leading-snug nutmeg font-semibold">20g</div>
                </div>
            </div>

            <div className="p-3 flex items-center border-b cursor-pointer hover:bg-gray-200 ">
                <div className="flex items-left w-1/2 pl-4">
                  <div className="leading-snug wenge-brown ">Fat</div>
                </div>
                <div className="flex items-left w-1/2 pl-4">
                  <div className="leading-snug nutmeg font-semibold">22g</div>
                </div>
            </div>
          </div>
        </div>


        <div className="attribution mt-8 text-gray-500">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">Frontend Mentor</a>. 
          Coded by <a href="#">K Yusuf Muhammad</a>.
        </div>
      </div>
    </main>
  );
}
