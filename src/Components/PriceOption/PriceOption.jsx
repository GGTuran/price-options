
const PriceOption = ({option}) => {
    const{name, price} = option
    return (
        <div>
            {
                <h2>{name}</h2>
            }
        </div>
    );
};

export default PriceOption;