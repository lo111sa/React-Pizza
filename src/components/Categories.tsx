<<<<<<< HEAD
type categoriesProps = { categoryId: number; setActiveCategory: any };

const Categories: React.FC<categoriesProps> = ({
  categoryId,
=======
type categoriesProps = { activeCategory: number; setActiveCategory: any };

const Categories: React.FC<categoriesProps> = ({
  activeCategory,
>>>>>>> 9f90414a2899f2de44dbe044bf9aefbf85bbdcef
  setActiveCategory,
}) => {
  const categories: string[] = [
    "All",
    "With meat",
    "Vegan",
    "Grill",
    "Spicy",
    "Closed",
  ];

  return (
    <div className="categories">
      <ul>
        {categories.map((el, index) => (
          <li
            key={index}
            onClick={() => setActiveCategory(index)}
<<<<<<< HEAD
            className={categoryId === index ? "active" : ""}
=======
            className={activeCategory === index ? "active" : ""}
>>>>>>> 9f90414a2899f2de44dbe044bf9aefbf85bbdcef
          >
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
