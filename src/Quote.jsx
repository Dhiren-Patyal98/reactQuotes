
import Card from 'react-bootstrap/Card';
import style from './CSs/quote.module.css';

import Footer from './Footer';

export default function Quote({a,q,h}) {
    return (
        <Card className={` px-2 ${style.card}`}>

            <Card.Body>

                <p className={`${style.quoteText}`}>
                    { q ? q :"You can observe much more by just watching" }
                    
                    </p>
                <p className={`${style.quoteAuthor}`} >-{a? a.replace(', type.fit', ''):"Dhiren"}</p>
                <Footer h= {h} />
            </Card.Body>
        </Card>
    );
}

 
