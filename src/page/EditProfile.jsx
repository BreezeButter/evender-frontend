import { Link } from "react-router-dom";

export default function EditProfile() {
    return (
        <div className="flex justify-center mt-10">
            <div className="w-[65%] ">
                {/* Head */}
                <div className="mb-20 text-4xl font-semibold">
                    <h1 className="borber border-b-4 pb-2 border-lightbluecute w-60">
                        Edit Profile
                    </h1>
                </div>

                {/* User */}
                <form>
                    <div className="flex flex-row justify-between mb-28">
                        {/* Left */}
                        <div className="avatar">
                            <div className="w-72 h-72 rounded-full">
                                <img
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
                                    className=""
                                />
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex justify-center w-full">
                            <div className="w-[80%] flex justify-center flex-col">
                                <div className="grid grid-rows-2 grid-flow-col gap-2">
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-base text-darkbluecute font-medium">
                                                First Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="input input-bordered w-full max-w-xs text-sm font-light bg-white "
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-base text-darkbluecute font-medium">
                                                Gender
                                            </span>
                                        </label>
                                        <select
                                            id="gender"
                                            className="input input-bordered w-full max-w-xs text-sm font-light bg-white "
                                        >
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">Other</option>
                                            <option value="4">
                                                Not Specified
                                            </option>
                                        </select>
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-base text-darkbluecute font-medium">
                                                Last Name
                                            </span>
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="input input-bordered w-full max-w-xs text-sm font-light bg-white "
                                        />
                                    </div>
                                    <div className="form-control w-full max-w-xs">
                                        <label className="label">
                                            <span className="label-text text-base text-darkbluecute font-medium">
                                                Birthday
                                            </span>
                                        </label>
                                        <input
                                            type="date"
                                            placeholder="First Name"
                                            className="input input-bordered w-full max-w-xs text-sm font-light bg-white "
                                        />
                                    </div>
                                </div>
                                <div className="form-control w-full mt-3">
                                    <label className="label">
                                        <span className="label-text text-base text-darkbluecute font-medium">
                                            About me
                                        </span>
                                    </label>
                                    <textarea
                                        className="block rounded-lg  border mb-6 border-gray-200 font-light py-3.5 w-[654px] bg-white text-sm pl-4"
                                        rows="5"
                                        name="description"
                                        placeholder="About me..."
                                    />
                                </div>
                                <div className="flex justify-center gap-4 mt-16">
                                    <Link to="/profile">
                                        <button
                                            type="submit"
                                            className="w-32 py-2 rounded-full bg-transparent border-lightbluecute border-2 font-medium text-base text-lightbluecute"
                                        >
                                            Save
                                        </button>
                                    </Link>
                                    <Link to="/profile">
                                        <button className="w-32 py-2 rounded-full font-medium text-base text-white bg-lightbluecute border-2 border-lightbluecute hover:border-lightbluecute hover:bg-transparent hover:text-lightbluecute">
                                            Cancel
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

// import { useState, useRef, useEffect } from "react";
// import RegisterInput from "../../auth/components/RegisterInput";
// import { useDispatch } from "react-redux";
// import { toast } from 'react-toastify';
// import { createProduct } from '../../product/components/slice/product-slice'
// import { useSelector } from "react-redux";

// export default function AdminProduct() {

//     const [input, setInput] = useState('');
//     const [file, setFile] = useState(null)

// const imageUrl = URL.createObjectURL(file)
// const defaultImage = '/src/assets/cat-card.jpg'
// const imgElement = document.createElement('img');
// if (imageUrl) {
//     imgElement.src = imageUrl;
//   } else {
//     imgElement.src = defaultImage;
//   }
//     const inputRef = useRef("")

//     console.log(file)

//     const dispatch = useDispatch();

//     const handleChangeInput = (e) => {
//         setInput({ ...input, [e.target.name]: e.target.value });

//     };

//     console.log(input)

//     const hdlCreateProduct = async (e) => {

//         e.preventDefault();

//         const formData = new FormData();
//         if (file) {
//             formData.append("image1", file);
//         }
//         if (input.productName) {
//             formData.append("productName", input.productName);
//         }
//         if (input.brand) {
//             formData.append("brand", input.brand);
//         }
//         if (input.price) {
//             formData.append("price", input.price);
//         }
//         if (input.productWeight) {
//             formData.append("productWeight", input.productWeight);
//         }
//         if (input.petAge) {
//             formData.append("petAge", input.petAge);
//         }
//         if (input.detail) {
//             formData.append("detail", input.detail);
//         }
//         if (input.petType) {
//             formData.append("petType", input.petType);
//         }
//         if (input.foodType) {
//             formData.append("foodType", input.foodType);
//         }
//         if (input.productType) {
//             formData.append("productType", input.productType);
//         }

//         try {
//             dispatch(createProduct(formData));

//         } catch (err) {
//             toast.error('Payment Error')
//         }
//     }

//     return (
//         <div className="grid grid-cols-1">
//             <div>
//                 <form onSubmit={hdlCreateProduct}>
//                     <div>
//                         <div>
//                             <div className="avatar">
//                                 {/* <div className="w-[400px] rounded-xl"> */}
//                                 {/* <img src={  imageUrl || defaultImage  } /> */}
//                                 {/* </div> */}
//                             </div>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-2 gap-5">
//                         <RegisterInput
//                             name="productName"
//                             placeholder="productName"
//                             value={input.productName}
//                             onChange={handleChangeInput}

//                         // isInvalid={error.userName}
//                         />
//                         <RegisterInput
//                             name="brand"
//                             placeholder="brand"
//                             value={input.brand}
//                             onChange={handleChangeInput}
//                         // isInvalid={error.firstName}
//                         />
//                         <RegisterInput
//                             name="price"
//                             placeholder="price"
//                             value={input.price}
//                             onChange={handleChangeInput}
//                         // isInvalid={error.lastName}
//                         />
//                         <RegisterInput
//                             name="productType"
//                             placeholder="productType"
//                             value={input.productType}
//                             onChange={handleChangeInput}
//                         // isInvalid={error.email}
//                         />
//                         <RegisterInput
//                             name="productWeight"
//                             placeholder="productWeight"
//                             value={input.productWeight}
//                             onChange={handleChangeInput}
//                         // isInvalid={error.password }
//                         />
//                         <RegisterInput
//                             name="petAge"
//                             placeholder="petAge"
//                             value={input.petAge}
//                             onChange={handleChangeInput}
//                         // isInvalid={error.userName}
//                         />
//                         <RegisterInput
//                             name="detail"
//                             placeholder="detail"
//                             value={input.detail}
//                             onChange={handleChangeInput}
//                         // isInvalid={error.firstName}
//                         />
//                         <RegisterInput
//                             name="petType"
//                             placeholder="petType"
//                             value={input.petType}
//                             onChange={handleChangeInput}
//                         // isInvalid={error.firstName}
//                         />
//                         <RegisterInput
//                             name="foodType"
//                             placeholder="foodType"
//                             value={input.foodType}
//                             onChange={handleChangeInput}
//                         // isInvalid={error.firstName}
//                         />
//                     </div>
//                     <div>
//                         <div className="avatar m-12">
//                             <label className="block">
//                                 <span className="sr-only">Choose photo</span>
//                                 <input type="file"
//                                     ref={inputRef}
//                                     onChange={e => {
//                                         if (e.target.files[0]) {
//                                             setFile(e.target.files[0])
//                                         }
//                                     }}

//                                     className="block w-full text-sm text-slate-500
//                                               file:mr-4 file:py-2 file:px-4
//                                              file:rounded-full file:border-0
//                                             file:text-sm file:font-semibold
//                                              file:bg-violet-50 file:text-violet-700
//                                                  hover:file:bg-violet-100
//                                                 "
//                                 />
//                             </label>
//                         </div>
//                     </div>
//                     <div>
//                         <button type="submit" className="btn btn-primary flex items-center mx-auto">Create Product</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }
