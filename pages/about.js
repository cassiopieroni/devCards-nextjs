import PagesDisplay from '../components/commonComps/PagesDisplay';
import css from 'styled-jsx/css';

export default () => (
    
    <PagesDisplay>
        
        <div className='container'>

            <div className='aboutBox'>

                <h2 className='title'>About us</h2>
                
                <p className='text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda similique temporibus enim, est sed aspernatur velit, quibusdam neque, blanditiis mollitia ullam quisquam labore quia. Voluptatem dolorum distinctio nam cupiditate?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda similique temporibus enim, est sed aspernatur velit, quibusdam neque, blanditiis mollitia ullam quisquam labore quia. Voluptatem dolorum distinctio nam cupiditate?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda similique temporibus enim, est sed aspernatur velit, quibusdam neque, blanditiis mollitia ullam quisquam labore quia. Voluptatem dolorum distinctio nam cupiditate?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt assumenda similique temporibus enim, est sed aspernatur velit, quibusdam neque, blanditiis mollitia ullam quisquam labore quia. Voluptatem dolorum distinctio nam cupiditate?
                </p>
            
            </div>
        
        </div>

        <style jsx>{ aboutPageStyle }</style>

    </PagesDisplay>
);

const aboutPageStyle = css`
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: 100%;
        background-color: #ab987a;
        background-image: linear-gradient(#ab987a, #f5f5f5)
    }

    .aboutBox {
        margin: 40px auto;
        padding: 30px 0 0;
        width: 90%;
        max-width: 650px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title {
        background-color: #ff533d;
        color: #f5f5f5;
        font-size: 1.2rem;
        font-weight: bold;
        text-transform: uppercase;
        text-align: center;
        width: 100%;
        height: 50px;
        line-height: 50px;
    }

    .text {
        max-width: 650px;
        color: #ffffff;
        line-height: 35px;
        margin: 20px 10px;
        text-align: justify;
        color: #0f1626;
        font-size: 1.2rem;
    }
`;