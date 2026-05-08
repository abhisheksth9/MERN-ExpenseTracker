// import { API_PATHS } from "./apiPath";
// import axiosInstance from "./axiosInstance";

// const uploadImage = async (imageFile) => {
//     const formData = new FormData();

//     formData.append("image", imageFile);

//     try {
//         const response = await axiosInstance.post(
//             API_PATHS.IMAGE.UPLOAD_IMAGE,
//             formData
//         );

//         return response.data;
//     } catch (error) {
//         console.error(
//             "Error uploading image:",
//             error.response?.data || error.message
//         );

//         throw error;
//     }
// };

// export default uploadImage;
import { API_PATHS } from "./apiPath";
import axiosInstance from "./axiosInstance";

const uploadImage = async (imageFile) => {
    const formData = new FormData();

    formData.append("image", imageFile);

    try {
        const response = await axiosInstance.post(
            API_PATHS.IMAGE.UPLOAD_IMAGE,
            formData,
            {
                headers: {
                    "Content-Type": undefined,
                },
            }
        );

        return response.data;
    } catch (error) {
        console.error(
            "Error uploading image:",
            error.response?.data || error.message
        );

        throw error;
    }
};

export default uploadImage;