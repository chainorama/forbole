import React, { Component } from 'react';

class Recommend extends Component {

  componentDidMount(){
      //Activate tags
      //removed class label and label-color from tag span and replaced with data-color
      var tagClass = $('.tagsinput').data('color');

      $('.tagsinput').tagsinput({
          tagClass: 'label label-info tag-'+ tagClass +' ',
          maxTags: 3
      });

      $('.bootstrap-tagsinput').addClass('form-control');
  }

  	render() {
    	return (
    		<div>
          <div className="page-header header-filter header-small" data-parallax="true" style={{backgroundImage: 'url(/img/recommend-bg.jpg)'}}>
            <div className="container">
        			<div className="row">
        				<div className="col-md-8 col-md-offset-2 text-center">
        					<h1 className="title"></h1>
        				</div>
        			</div>
        		</div>
          </div>
    			<div className="main main-raised">
					<div className="contact-content">
			    		<div className="container">
							<div className="row">
								<div className="col-md-12">
                  <div className="title text-center"><h3>Make a Recommendation</h3></div>
                  <div className="card card-profile card-plain">
        						<div className="card-avatar">
        							<a href="#pablo">
        								<img className="img" src="/img/faces/kwun-profile.jpg" />
        							</a>
        						</div>

        						<div className="card-content">
        							<h4 className="card-title">Kwun Yeung</h4>
        							<h6 className="category text-muted">Co-Founder & Conductor of Forbole</h6>

        							<p className="card-description">
        								You can recognize your connection by writing them a recommendation. Your recommendation will be shown on their profiles.
        							</p>
        						</div>
        					</div>
									<form role="form" id="contact-form" method="post">
										<div className="form-group label-floating">
											<label className="control-label">Your name</label>
											<input type="text" name="name" className="form-control" value="Terence Lam" readOnly={true}/>
										</div>
                    <div className="form-group label-floating">
      								<label className="control-label">Recommendation</label>
      								<textarea name="recommendation" className="form-control" id="recommendation" rows="6" value="Kwun always keeps abreast with the latest development of multimedia technology. He shows to me high degree of management skill with junior colleagues. He shows also excellent EQ when handling difficult tasks and clients.

He is a great business partner, colleague and friend to work with." readOnly={true}></textarea>
      							</div>
										<div className="form-group label-floating">
                      <label className="control-label">Endorse 3 Skills</label>
                      <input type="text" readOnly={true} defaultValue="Blockchain, UX/UI, Entrepreneurship" className="tagsinput" data-role="tagsinput" data-color="rose"/>
										</div>
										<div className="submit text-center">
											<a href="/recommend/sent/" className="btn btn-primary btn-raised btn-round">Send</a>
										</div>
									</form>
								</div>
			               </div>
			            </div>
					</div>
			    </div>
    		</div>
    	)
  	}
}

export default Recommend;
