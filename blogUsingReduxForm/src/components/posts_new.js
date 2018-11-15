import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

// button으로 작성된 내용을 적용시키면서 index로 가고싶을때, 기존 link를 사용하면 내용 저장이안되고 걍 날아가버린다.
// 이문제 해결을 위해 context를 사용한다. 
// context를 이용하는 유일한 시점은 구체적으로 리액트 라우터로 작업할 때이다.
// 남발하면 안됨. 뭔가 안좋은듯.
class PostsNew extends Component {

    static contextTypes = {
        router: PropTypes.object
    };
    //blog post has been created, navigate the user to the index
    // We navigate by calling this.context.router.push with the 
    // new path to navigate to.
    onSubmit(props) {
        this.props.createPost(props).then(() => {
            this.context.router.push('/');
        }); 
    }

    render() {
        const { fields: { title, categories, content }, handleSubmit } = this.props;
        console.log(title);
        // const handleSubmit = this.props.handleSubmit; 위랑 같음
        // const title = this.props.fields.title 이 fields:... 이랑 같다.

        //form onSubmit에 handleSubmit을 저런식으로 넣어주면, 리덕스폼에서 자동적으로 아래 폼에 값들이 안채워지면 서브밋을 못하도록 막는역할 해준다. 개멋짐.
        return (
           <form onSubmit={handleSubmit(this.onSubmit.bind(this))}> 
               <h3>Create A New Post</h3>
               <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                <label>Title</label>
                <input type="text" className="form-control" {...title} />
                <div className="text-help">
                    {/* title은 필드에서 가져온값이고, 에러는 validate함수로부터 가져온것이다 */}
                    {title.touched ? title.error : ''}
                </div>
               </div>

               <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                <label>Categories</label>
                <input type="text" className="form-control" {...categories}/>
                <div className="text-help">
                    {categories.touched ? categories.error : ''}
                </div>
               </div>

               <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                <label>Content</label>
                <textarea className="form-control" {...content}/>
                <div className="text-help">
                    {content.touched ? content.error : ''}
                </div>
               </div>

               <button type="submit" className="btn btn-primary">Submit</button>
               <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}

// validate함수로부터 오브젝트를 반환, 오브젝트의 키로 필드이름의 하나와 매칭되고, 예를들어 타이틀(title)은 키로 오브젝트(Enter a username)를 묶는다. 오브젝트는 불리언, 스트링 등등 다됨.
function validate(values) {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a username';
    }
    if(!values.categories) {
        errors.categories = "Enter categories";
    }
    if(!values.content) {
        errors.content = "Enter some content";
    }

    return errors;
}

// reduxForm은 헬퍼로, connect와 마찬가지로, this.props로 사용 가능.
// reduxForm에 액션을 추가하려면, reduxForm과 connect를 합쳐야한다. 
// connect : first argument is mapStateToProps, 2nd is mapDIspatchToProps
// reduxForm : first is form config, 2nd is mapStateToprops, 3rd is mapDispatchToProps
// 아래의 경우는, 앞에 form:.. 이런게 컨피그, null이 mapStateToProps, createPost가 mapDispatchToProps
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
},null, { createPost })(PostsNew);

// user tyoes something in... record it on application statea
// state === { 
//     form: {
//         postsNewForm: {
//             title:'....',
//             categories:'...',
//             content:'...'
//         }
//     }
// }