import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { formatDistanceToNow } from "date-fns";

export default function ProductCard() {
  const params = useParams();
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/product/${params.id}`,
    axios,
  );
  const product = data?.data;
  console.log("product", data);
  const [selectedImage, setSelectedImage] = useState(null);
  const [quantity, setQuantity] = useState(0);
  return (
    <main>
      <div className="product  flex min-h-[600px] flex-col md:flex-row">
        <div className="images flex md:w-[55%] ">
          {product?.images?.length > 1 ? (
            <div className="w-[150px]  h-full p-3 flex flex-col gap-3">
              {product?.images.map((image, i) => (
                <img
                  key={i}
                  src={image}
                  alt=""
                  className=""
                  onMouseOver={() => setSelectedImage(image)}
                />
              ))}
            </div>
          ) : null}
          <div className="">
            <img
              className="w-[500px] "
              src={selectedImage || product?.images[0]}
              alt=""
            />
          </div>
        </div>

        <div className="product-data md:w-[45%] ">
          <h2>{product?.title}</h2>
          <p>{product?.price * quantity || 0}</p>
          quantity :<button onClick={() => setQuantity(quantity + 1)}>+</button>
          {quantity}
          <button
            onClick={() => {
              if (quantity < 2 || quantity <= product?.minimumOrderQuantit)
                return;
              setQuantity(quantity - 1);
            }}
          >
            -
          </button>
        </div>
      </div>

      <div className="reviews flex flex-col gap-3">
        {product?.reviews?.map((review, i) => (
          <div key={i} className="bg-red-200 rounded-xl p-3">
            <h5>{review.reviewerName}</h5>
            <span className="text-xs text-gray-600">
              {formatDistanceToNow(review.date, { addSuffix: true })}
            </span>

            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
