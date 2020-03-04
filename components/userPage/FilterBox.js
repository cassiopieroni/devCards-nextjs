import css from 'styled-jsx/css';

const FilterBox = ({ changeFilterSearch, filterInputVal }) => (
    
    <div className='filterBox'>
        <input
            onChange={ e => changeFilterSearch(e) } 
            value={filterInputVal} 
            placeholder={'buscar repositório: '}    
        />

        <style jsx>{ filterBoxStyle }</style>
    </div>
)

const filterBoxStyle = css`

    .filterBox {
        margin: 10px auto 30px;
        width: 80%;
    }

    .filterBox input {
        line-height: 40px;
        height: 40px;
        box-sizing: border-box;
        width: 400px;
        padding-left: 25px;
        font-size: 1rem;
        border-radius: 5px;
        border: 2px solid #f5f5f5;
        background-color: transparent;
        color: #f5f5f5;
    }
        .filterBox input::placeholder {
            color: #f5f5f5;
        }
`;

export default FilterBox;