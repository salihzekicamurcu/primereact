import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Card} from '../../components/card/Card';
import {Button} from '../../components/button/Button';
import {TabView,TabPanel} from '../../components/tabview/TabView';
import {CodeHighlight} from '../codehighlight/CodeHighlight';

export class CardDemo extends Component {

    render() {
        let header = <img alt="Card" src='showcase/resources/demo/images/usercard.png'/>;
        let footer = <span>
                        <Button label="Save" icon="pi pi-check"/>
                        <Button label="Cancel" icon="pi pi-times" className="ui-button-secondary"/>
                     </span>;

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Card</h1>
                        <p>Card is a flexible container component.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Card title="Simple Card" style={{width: '360px'}}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                    </Card>

                    <br/><br/>

                    <Card title="Advanced Card" subtitle="Subtitle" style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={header}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                    </Card>
                </div>

                <CardDoc />
            </div>
        )
    }
}

class CardDoc extends Component {

    shouldComponentUpdate(){
        return false;
    }

    render() {
        return (
            <div className="content-section source">
                <TabView>
                    <TabPanel header="Documentation">
                        <h3>Import</h3>
                        <CodeHighlight className="language-javascript">
                            {`
import {Card} from 'primereact/card';

`}
                        </CodeHighlight>

                        <h3>Getting Started</h3>
                        <p>Card is used as a container.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Card>
    Content
</Card>

`}
                        </CodeHighlight>

                        <h3>Title</h3>
                        <p>Title text of the card is provided using the <strong>title</strong> property, optionally <strong>subtitle</strong> property is available for additional information about the card.</p>
                        <CodeHighlight className="language-jsx">
                            {`
<Card title="Title">
    Content
</Card>
`}
                        </CodeHighlight>

                        <h3>Header and Footer</h3>
                        <p>Header and Footer sections are defined using the properties of the same name.</p>

                        <CodeHighlight className="language-jsx">
                            {`
let header = <img alt="Card" src='showcase/resources/demo/images/usercard.png'/>;
let footer = <span>
                <Button label="Save" icon="pi pi-check"/>
                <Button label="Cancel" icon="pi pi-times" className="ui-button-secondary"/>
             </span>;

<Card footer={footer} header={header}>
    Content
</Card>

`}
                        </CodeHighlight>

                        <h3>Properties</h3>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Default</th>
                                    <th>Description</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>id</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Unique identifier of the element.</td>
                                </tr>
                                <tr>
                                    <td>header</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Header of the card.</td>
                                </tr>
                                <tr>
                                    <td>footer</td>
                                    <td>any</td>
                                    <td>null</td>
                                    <td>Footer of the card.</td>
                                </tr>
                                <tr>
                                    <td>title</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Title of the card.</td>
                                </tr>
                                <tr>
                                    <td>subtitle</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Secondary title of the card.</td>
                                </tr>
                                <tr>
                                    <td>style</td>
                                    <td>object</td>
                                    <td>null</td>
                                    <td>Inline style of the component.</td>
                                </tr>
                                <tr>
                                    <td>className</td>
                                    <td>string</td>
                                    <td>null</td>
                                    <td>Style class of the component.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Styling</h3>
                        <p>Following is the list of structural style classes, for theming classes visit <Link to="/theming">theming</Link> page.</p>
                        <div className="doc-tablewrapper">
                            <table className="doc-table">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Element</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>ui-card</td>
                                    <td>Container element.</td>
                                </tr>
                                <tr>
                                    <td>ui-card-title</td>
                                    <td>Title element.</td>
                                </tr>
                                <tr>
                                    <td>ui-card-subtitle</td>
                                    <td>Subtitle element.</td>
                                </tr>
                                <tr>
                                    <td>ui-card-content</td>
                                    <td>Content of the card.</td>
                                </tr>
                                <tr>
                                    <td>ui-card-footer</td>
                                    <td>Footer of the card.</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3>Dependencies</h3>
                        <p>None.</p>
                    </TabPanel>
                    <TabPanel header="Source">
                        <a href="https://github.com/primefaces/primereact/tree/master/src/showcase/card" className="btn-viewsource" target="_blank" rel="noopener noreferrer">
                            <i className="fa fa-github"></i>
                            <span>View on GitHub</span>
                        </a>
                        <CodeHighlight className="language-javascript">
                            {`
export class CardDemo extends Component {

    render() {

        let header = <img alt="Card" src='showcase/resources/demo/images/usercard.png'/>;
        let footer = <span>
                        <Button label="Save" icon="pi pi-check"/>
                        <Button label="Cancel" icon="pi pi-times" className="ui-button-secondary"/>
                     </span>;

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        <h1>Card</h1>
                        <p>Card is a flexible container component.</p>
                    </div>
                </div>

                <div className="content-section implementation">
                    <Card title="Simple Card" style={{width: '360px'}}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                    </Card>

                    <br/><br/>

                    <Card title="Advanced Card" subtitle="Subtitle" style={{width: '360px'}} className="ui-card-shadow" footer={footer} header={header}>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                            quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</div>
                    </Card>
                </div>

                <CardDoc />
            </div>
        )
    }
}

`}
                        </CodeHighlight>
                    </TabPanel>
                </TabView>
            </div>
        )
    }
}