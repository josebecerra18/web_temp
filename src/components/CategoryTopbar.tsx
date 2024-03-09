import React, {useState} from "react";

const CategoryTopbar: React.FC = () => {
    const categoryList = [
        {name: "Todas"},
        {name: "Comidas auténticas"},
        {name: "Servicios"},
        {name: "Eventos"},
        {name: "Empleos locales"},
        {name: "Vendedores ambulantes"},
        {name: "Productos"},
        {name: "Discotecas"},
        {name: "Panaderías"},
        {name: "Restaurantes"},
        {name: "Mercados"},
        {name: "Iglesias"},
    ];
    const [categories, setCategories] = useState(categoryList);
    return (
        <div className="w-screen h-12 flex items-center bg-meins-background">
            <ul className="flex w-screen justify-center items-center">
                {categories.map((category: any) => {
                    return <li className="cursor-pointer rounded-xl text-sm text-white px-4 py-1 mx-2 w-fit hover:bg-gray-50/10">{category.name}</li>
                })}
            </ul>
        </div>
    )
}

export default CategoryTopbar;