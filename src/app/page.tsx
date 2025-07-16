"use client";
import { useRef, useState, useEffect } from "react";

const products = [
    {
    name: "Organic Tomato",
    price: "₹50 / kg",
    image:
      "https://media.istockphoto.com/id/847335116/photo/tomatoes-on-the-vine.jpg?s=612x612&w=0&k=20&c=XspM2ySvUfqjnt7HL5qKyn0tyRb5qLsf1GAP6-3xQsw=",
    description: "Fresh and pesticide-free tomatoes from local farms.",
  },
  {
    name: "Brinjal",
    price: "₹40 / kg",
    image:
      "https://www.shutterstock.com/image-photo/eggplant-wicker-basket-on-wooden-600nw-466113581.jpg",
    description: "Organic brinjals with rich flavor and nutrition.",
  },
  {
    name: "Peas",
    price: "₹35 / kg",
    image:
      "https://indiangloriousnursery.com/wp-content/uploads/2023/05/nurserylive-seeds-peas-azad-p1-desi-vegetable-seeds-16969165734028_600x600.jpg",
    description: "Fresh green peas harvested daily.",
  },
  {
    name: "Potato",
    price: "₹25 / kg",
    image:
      "https://static.toiimg.com/thumb/msid-110970125,width-1280,height-720,imgsize-89492,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    description: "Best quality organic potatoes, Very healthy and testy.",
  },
  {
    name: "Green Chili",
    price: "₹30 / kg",
    image:
      "https://5.imimg.com/data5/TK/LO/MY-1955961/fresh-green-chilli-supplier.png",
    description: "Spicy green chilies to add flavor and heat.",
  },
  {
    name: "Cucumber",
    price: "₹40 / kg",
    image:
      "https://natureandnurtureseeds.com/cdn/shop/files/Green-Finger-Cucumber-seeds_600x.jpg?v=1739910912",
    description: "Cool and crispy cucumbers from local farms.",
  },
  {
    name: "Spinach",
    price: "₹20 / kg",
    image:
      "https://media.istockphoto.com/id/655979026/photo/fresh-harvested-organic-spinach.jpg?s=612x612&w=0&k=20&c=qoMmnp5ICdqWKPYQKo189yG4Ckayy6Rqx4gg0-yMmfI=",
    description: "Leafy green spinach packed with iron.",
  },
    {
    name: "Bottle Gourd",
    price: "₹25 / kg",
    image:
      "https://www.jiomart.com/images/product/original/590007694/organic-bottle-gourd-700-g-product-images-o590007694-p590797788-0-202410141703.jpg?im=Resize=(420,420)",
    description: "Fresh bottle gourds, perfect for healthy dishes.",
  },
    {
    name: "Radish",
    price: "₹15 / kg",
    image:
      "https://mybageecha.com/cdn/shop/products/Radish.jpg?v=1571438538",
    description: "Crunchy radishes with a slightly spicy taste.",
  },
   {
    name: "Fenugreek",
    price: "₹30 / kg",
    image:
      "https://vibrantliving.in/cdn/shop/files/FenugreekSeeds.png?v=1731060026",
    description: "Fresh fenugreek leaves, great for curries.",
  },
  {
    name: "Sweet Corn",
    price: "₹40 / kg",
    image:
      "https://www.shutterstock.com/image-photo/farmer-selling-organic-corns-market-600nw-2032197767.jpg",
    description: "Juicy sweet corn harvested fresh from the farm.",
  },
  {
    name: "Carrot",
    price: "₹70 / kg",
    image:
      "https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg",
    description: "Crunchy and sweet carrots, rich in vitamin A.",
  },
    {
    name: "Okra",
    price: "₹30 / kg",
    image:
      "https://blog.agribegri.com/public/blog_images/okra-seed-germination-time-temperature-light-600x400.jpg",
    description: "Fresh okra pods, perfect for frying and stews.",
  },
  {
    name: "Green Peppers",
    price: "₹40 / kg",
    image:
      "https://t4.ftcdn.net/jpg/14/40/85/03/360_F_1440850366_0SUpAqeXP5PRjahFrjTRBJ3uy2oq4gz3.jpg",
    description: "Crisp green bell peppers, great for salads and cooking.",
  },
  {
    name: "Zucchini",
    price: "₹35 / kg",
    image:
      "https://www.shutterstock.com/image-photo/female-hands-cut-sweet-red-600nw-1789254290.jpg",
    description: "Fresh zucchini, ideal for grilling and stir-fries.",
  },
  {
    name: "Asparagus",
    price: "₹150 / kg",
    image:
      "https://thumbs.dreamstime.com/b/freshly-picked-asparagus-cutting-board-salt-pepper-concept-healthy-eating-selective-focus-152320119.jpg",
    description: "Tender asparagus stalks, rich in nutrients.",
  },
  {
    name: "Beetroot",
    price: "₹25 / kg",
    image:
      "https://static.wixstatic.com/media/c43592_f0f6b3cdb0704871866012ae58854e70~mv2.jpg/v1/fill/w_520,h_390,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c43592_f0f6b3cdb0704871866012ae58854e70~mv2.jpg",
    description: "Deep red beetroots, perfect for salads and juices.",
  },
  {
    name: "Kohlrabi",
    price: "₹28 / kg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8xTtVmXUKEVkNjT80FbrR5UJcJMAwgiXVDA&s",
    description: "Crunchy kohlrabi bulbs, great for raw and cooked dishes.",
  },
  {
    name: "Leeks",
    price: "₹40 / kg",
    image:
      "https://5.imimg.com/data5/PC/TD/MY-27346073/fresh-leeks.jpg",
    description: "Mild flavored leeks, perfect for soups and sautés.",
  },
  {
    name: "Parsnip",
    price: "₹30 / kg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTMlsDIX3onXQvo5J0PEdnc9qhi3MrA2pL5Q&s",
    description: "Sweet and nutty parsnips, great roasted or mashed.",
  },
  {
    name: "Radicchio",
    price: "₹50 / kg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ4ISubsw-EWUc_WaGImW3KwD3oBpvB7R5zg&s",
    description: "Bitter-sweet radicchio, perfect for salads and grilling.",
  },
  {
    name: "Swiss Chard",
    price: "₹35 / kg",
    image:
      "https://t3.ftcdn.net/jpg/00/39/08/56/360_F_39085638_ilQPwhP8PfCJFNqviC9Tg7mzLmYr5ABe.jpg",
    description: "Colorful swiss chard leaves, full of vitamins.",
  },
  {
    name: "Turnip",
    price: "₹20 / kg",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/7/437570539/MO/RG/RZ/223549119/coguraated-carton-box.jpeg",
    description: "Mild and sweet turnips, great in soups and stews.",
  },
  {
    name: "Watercress",
    price: "₹45 / kg",
    image:
      "https://images.unsplash.com/photo-1664355048238-65d3dda1a0c2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXJjcmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    description: "Peppery watercress, perfect for salads and sandwiches.",
  },
  {
    name: "Edamame",
    price: "₹60 / kg",
    image:
      "https://www.shutterstock.com/image-photo/japanese-raw-edamame-beans-fresh-260nw-2486035569.jpg",
    description: "Fresh edamame pods, great steamed or boiled.",
  },
  {
    name: "Jerusalem Artichoke",
    price: "₹70 / kg",
    image:
      "https://cpimg.tistatic.com/6274641/b/4/-jerusalem-artichoke.jpg",
    description: "Nutty-flavored tubers, perfect for roasting.",
  },
  {
    name: "Chayote",
    price: "₹25 / kg",
    image:
      "https://cdn.dotpe.in/longtail/store-items/8832653/E5d3zDgm.webp",
    description: "Crunchy chayote squash, ideal for stir-fries and salads.",
  },
  {
    name: "Horseradish",
    price: "₹90 / kg",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/394440181/XE/JI/XC/19056109/horseradish-royalty-free-image-521708351-1532726447.jpg",
    description: "Spicy horseradish root, adds zing to sauces.",
  },
  {
    name: "Taro Root",
    price: "₹40 / kg",
    image:
      "https://image-cdn.tabechoku.com/crop/w/1440/h/1920/cw/1440/ch/1080/images/7b8865e7af9898993453dbe7e381b8ad7fe226cd6b3eba26765c584d63c479fa.jpeg",
    description: "Nutty taro root, great steamed or boiled.",
  },
  {
    name: "Wasabi",
    price: "₹200 / kg",
    image:
      "https://rimage.gnst.jp/livejapan.com/public/article/detail/a/00/02/a0002345/img/en/a0002345_parts_5b28b61eb6f1d.jpg?20210210160549&q=80&rw=686&rh=490",
     description: "Wasabi is best food fro eating , very healthy",
    },
  {
    name: "Jicama",
    price: "₹50 / kg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_csViyiePGgE2_iR1zCxLzjO1WRKfbcDukA&s",
    description: "Crunchy jicama root, perfect for salads and snacks.",
  },
  {
    name: "Nopales (Cactus Pads)",
    price: "₹60 / kg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU7MXea82StNKd62SDDvDHLL1L2vjvJyRcPQ&s",
    description: "Tender cactus pads, common in Mexican cuisine.",
  },
  {
    name: "Pumpkin",
    price: "₹20 / kg",
    image: "https://foodcare.in/cdn/shop/files/PUMPKIN.jpg?v=1725364590",
    description: "Fresh pumpkin, ideal for soups and baking.",
  },
    {
    name: "Full Cream Milk",
    price: "₹60 / liter",
    image: "https://www.shutterstock.com/image-photo/banner-glass-milk-jug-on-260nw-1739574104.jpg",
    description: "Rich and creamy full cream milk, fresh from local farms.",
  },
  {
    name: "Paneer (Cottage Cheese)",
    price: "₹250 / kg",
    image: "https://media.istockphoto.com/id/1183707972/photo/paneer-cottage-cheese-close-up.jpg?s=612x612&w=0&k=20&c=PX2_y5j0KJUURf2qZuWMrxmZ5wtbci076zEg_1w8KiI=",
    description: "Soft and fresh paneer, perfect for cooking and salads.",
  },
  {
    name: "Butter",
    price: "₹300 / kg",
    image: "https://t3.ftcdn.net/jpg/02/10/30/54/360_F_210305493_vSBsVrBRyJvLBR5JLKmISAEy3xjfcERN.jpg",
    description: "Creamy butter made from pure milk, great for baking and cooking.",
  },
  {
    name: "Curd (Yogurt)",
    price: "₹50 / kg",
    image: "https://media.istockphoto.com/id/1214850940/photo/yogurt-is-good-for-health-with-black-background.jpg?s=612x612&w=0&k=20&c=8GqPjqx9ykwamtCXQE_lOfsQRTQE89RxzBz2kcndXEg=",
    description: "Fresh homemade curd, rich in probiotics and flavor.",
  },
  {
    name: "Cheese",
    price: "₹400 / kg",
    image: "https://images.unsplash.com/photo-1683314573422-649a3c6ad784?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlfGVufDB8fDB8fHww",
    description: "Delicious processed cheese slices, great for sandwiches.",
  },
  {
    name: "Ghee",
    price: "₹600 / kg",
    image: "https://static.vecteezy.com/system/resources/previews/015/933/280/non_2x/pure-tup-or-desi-ghee-also-known-as-clarified-liquid-butter-free-photo.jpg",
    description: "Pure clarified butter, ideal for traditional cooking.",
  },
  {
    name: "Flavored Milk",
    price: "₹70 / liter",
    image: "https://static.vecteezy.com/system/resources/previews/065/867/131/non_2x/healthy-protein-shake-with-frothy-texture-served-in-glass-photo.jpeg",
    description: "Tasty flavored milk in chocolate and strawberry variants.",
  },
  {
    name: "Milk Powder",
    price: "₹350 / kg",
    image: "https://www.shutterstock.com/image-photo/powdered-milk-portion-granulated-powder-600nw-2411414141.jpg",
    description: "Instant milk powder for easy use and long shelf life.",
  },
];

export default function Page() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // New state to handle the details page active product index for slideshow
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);
  // To pause the slideshow when user clicks Add button
  const [isPaused, setIsPaused] = useState(false);

  // Scroll logic (unchanged)
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const currentScroll = container.scrollLeft;
    const scrollAmount = 240;

    if (dir === "left") {
      if (currentScroll <= 0) {
        container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    } else {
      if (currentScroll >= maxScrollLeft) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const increaseQty = (idx: number) => {
    setQuantities((prev) => {
      const current = prev[idx] || 1;
      return {
        ...prev,
        [idx]: current < 5 ? current + 1 : 5,
      };
    });
  };

  const decreaseQty = (idx: number) => {
    setQuantities((prev) => {
      const current = prev[idx] || 1;
      if (current <= 1) return prev;
      return {
        ...prev,
        [idx]: current - 1,
      };
    });
  };

  const handleAddClick = (idx: number) => {
    setActiveIndex(idx);
    setQuantities((prev) => ({ ...prev, [idx]: 1 }));
    setActiveDetailIndex(idx); // Show this product's details only
    setIsPaused(true); // Pause the slideshow
  };

  // When mouse leaves product card, resume slideshow
  const handleMouseLeaveFromProduct = () => {
    setActiveIndex(null);
    setIsPaused(false);
  };

  // Slideshow effect: move activeDetailIndex every 1 second if not paused
  useEffect(() => {
    if (isPaused) return; // pause slideshow

    const interval = setInterval(() => {
      setActiveDetailIndex((prev) => (prev + 1) % products.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const activeProduct = products[activeDetailIndex];

  return (
    <div className="w-full px-4 py-6">
      <div
        className="relative bg-green-100/70 rounded-xl py-7 pr-18 pl-14 overflow-hidden "
        // style={{ paddingLeft: "40px", paddingRight: "38px" }}
      >
        {/* Scroll Left */}
   {/* Scroll buttons */}
  <button
    onClick={() => scroll("left")}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white text-2xl px-3 py-1 rounded hover:bg-blue-700 shadow"
  >
    {"‹"}
  </button>

        {/* Products Row */}
       <div
  ref={scrollRef}
  className="flex overflow-x-auto scroll-smooth no-scrollbar ml-9"
  style={{ marginLeft: "38px", marginRight: "20px", gap: "10px" }}
>
          {products.map((product, idx) => (
            <div
              key={idx}
              onMouseLeave={handleMouseLeaveFromProduct}
             className="w-[220px] flex-shrink-0 bg-white rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-4 my-4 mx-2 transform transition-transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-36 w-full object-cover rounded"
              />
              <h2 className="text-base font-semibold mt-2 text-center">
                {product.name}
              </h2>
              <p className="text-green-600 font-bold text-center">{product.price}</p>
              <p className="text-sm text-gray-500 text-center">{product.description}</p>

              {activeIndex === idx ? (
                <div className="mt-3 flex flex-col gap-2">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="bg-green-200 px-2 py-1 rounded text-lg"
                      onClick={() => decreaseQty(idx)}
                    >
                      −
                    </button>
                    <input
                      type="number"
                      value={quantities[idx] || 1}
                      readOnly
                      className="w-10 text-center border rounded"
                    />
                    <button
                      className="bg-green-200 px-2 py-1 rounded text-lg"
                      onClick={() => increaseQty(idx)}
                    >
                      +
                    </button>
                  </div>
                  <a
                    href="#"
                    className="bg-orange-500 hover:bg-orange-600 text-white rounded py-1 block text-center"
                  >
                    Buy Now
                  </a>
                </div>
              ) : (
                <button
                  className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded w-full"
                  onClick={() => handleAddClick(idx)}
                >
                  Add
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Scroll Right */}
      <button
    onClick={() => scroll("right")}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-600 text-white text-2xl px-3 py-1 rounded hover:bg-blue-700 shadow"
  >
    {"›"}
  </button>
      </div>
{/* Product Details Section */}
<div className="mt-8 bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6 max-w-full">
  <img
    src={activeProduct.image}
    alt={activeProduct.name}
    className="rounded object-cover"
    style={{ width: '612px', height: '408px' }}
  />
  <div className="flex flex-col justify-center gap-4 md:flex-1">
    <h2 className="text-2xl font-bold">{activeProduct.name}</h2>
    <p className="text-xl text-green-600 font-semibold">{activeProduct.price}</p>
    <p className="text-gray-700">{activeProduct.description}</p>
    <p className="text-gray-600 italic">
      Why it's healthy: Fresh, organic, nutrient-rich, and carefully harvested for best quality.
    </p>
  </div>
</div>


    </div>
  );
}
