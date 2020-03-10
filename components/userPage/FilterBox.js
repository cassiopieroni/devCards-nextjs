import css from 'styled-jsx/css';

const FilterBox = ({ changeFilterSearch, filterInputVal }) => (
    
    <div className='filterBox'>
        <input
            onChange={ e => changeFilterSearch(e) } 
            value={filterInputVal} 
            placeholder={'search repository: '}    
        />

        <style jsx>{ filterBoxStyle }</style>
    </div>
)

const filterBoxStyle = css`

    .filterBox {
        margin: 20px auto 10px;
    }

    .filterBox input {
        line-height: 40px;
        height: 40px;
        box-sizing: border-box;
        width: 300px;
        padding-left: 25px;
        font-size: 1rem;
        border-radius: 5px;
        border: 1px solid #f5f5f5;
        background-color: #0f1626;
        color: #f5f5f5;
    }
`;

export default FilterBox;