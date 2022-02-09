import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import categoryService from "../services/category.service";
import { toast } from "react-toastify";

const CategoryContext = React.createContext();

export const useCategory = () => {
    return useContext(CategoryContext);
};

export const CategoryProvider = ({ children }) => {
    const [isLoading, setLoading] = useState(true);
    const [category, setCategory] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (error !== null) {
            toast(error);
            setError(null);
        }
    }, [error]);

    useEffect(() => {
        getCategoryList();
    }, []);
    function errorCatcher(error) {
        const { message } = error.response.data;
        setError(message);
    }
    function getCategory(id) {
        return category.find((p) => p._id === id);
    }

    async function getCategoryList() {
        try {
            const { content } = await categoryService.get();
            setCategory(content);
            setLoading(false);
        } catch (error) {
            errorCatcher(error);
        }
    }

    return (
        <CategoryContext.Provider
            value={{ isLoading, category, getCategory }}
        >
            {children}
        </CategoryContext.Provider>
    );
};

CategoryProvider.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
