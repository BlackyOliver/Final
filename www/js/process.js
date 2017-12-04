let process = {
  menu:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">E-MOVIES</div>
              </div>
            </div>

        <div className="list-group">
      <ul>
        <li className="list-group-title"></li>
        <li><a href='#' onClick={process.Action}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Action</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Horror}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Horror</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Sci}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Sci-Fci</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
                <li><a href='#' onClick={process.Comedy}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Comedy</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
        <li><a href='#' onClick={process.Romance}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Romance</div>
                  <div className="item-after">Details</div>
            </div>`
          </div></a>
        </li>
        <li><a href='#' onClick={process.Mystery}>
          <div className="item-content">
            <div className="item-inner">
              <div className="item-title">Mystery</div>
                  <div className="item-after">Details</div>
            </div>
          </div></a>
        </li>
      </ul>
    </div>
</div>
</div>
</div>
</div>
</div>;
    ReactDOM.render(content,document.getElementById('root'));
  },
  Action:function(){
    let content = <div className="page">
    <div className="page-content infinite-scroll infinite-scroll-top">
<div className="page-content contacts-content">
  <div className="list-block contacts-block">
    <div className="list-group">
     <div className="navbar">
              <div className="navbar-inner">
                <div className="center">E-MOVIES</div>
              </div>
            </div>
            <center><img src={"img/justice.jpg"}/>
            <p>asdajslfkjsldkjadlk jalkjlksjdlkaj lkj lakjskldj </p></center>
            <br/><a href='#' onClick={process.menu}>back</a>
</div>
</div>
</div>
</div>
</div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Horror:function(){
    let content = <div className="page">
      <div className="page-content infinite-scroll infinite-scroll-top">
        <div className="page-content contacts-content">
          <div className="list-block contacts-block">
          <div className="list-group">
            <div className="navbar">
              <div className="navbar-inner">
                <div className="center">E-MOVIES</div>
            </div>
          </div>

          <br /><img src ={justice.jpg} float = {left}/>
          <p>Fueled by his restored faith in humanity and inspired by Superman's selfless act, 
          Bruce Wayne enlists the help of his newfound ally, Diana Prince, to face an even greater enemy.</p>
          
          <br />
          <br />

          <br /><img src ={spider.jpg} float = {left}/>
          <p>Peter Parker balances his life as an ordinary high school student in Queens with his superhero alter-ego Spider-Man, 
          and finds himself on the trail of a new menace prowling the skies of New York City.</p>
          
          <br />
          <br />
          
          <br /><img src ={john.jpg} float = {left}/>
          <p>After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.</p>
          
          <br />
          <br />

          <br /><img src ={thor.jpg} float = {left}/>
          <p>Imprisoned, the almighty Thor finds himself in a lethal gladiatorial contest against the Hulk, his former ally. 
          Thor must fight for survival and race against time to prevent the all-powerful Hela from destroying his home 
          and the Asgardian civilization.</p>
          
          <br />
          <br />

          <br /><img src ={fast.jpg} float = {left}/>
          <p>When a mysterious woman seduces Dom into the world of terrorism and a betrayal of those closest to him, 
          the crew face trials that will test them as never before.</p>
          
          <br />
          <br />
        <a href='#' onClick={process.menu}>back</a>
          
    </div>
    </div>  
    </div>
    </div>
    </div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
  Sci:function(){
     let content = <div className="page">
      <div className="page-content infinite-scroll infinite-scroll-top">
        <div className="page-content contacts-content">
          <div className="list-block contacts-block">
          <div className="list-group">
            <div className="navbar">
              <div className="navbar-inner">
                <div className="center">E-MOVIES</div>
            </div>
          </div>

          <br /><img src ={it.jpg} float = {left}/>
          <p>A group of bullied kids band together when a shapeshifting monster, taking the appearance of a clown, begins hunting children.</p>
          
          <br />
          <br /> 

          <br /><img src = {anna.jpg} float = {left}/>
          <p>12 years after the tragic death of their little girl, 
          a dollmaker and his wife welcome a nun and several girls from a shuttered orphanage into their home, 
          where they soon become the target of the dollmaker's possessed creation, Annabelle.</p>

          <br />
          <br />

          <br /><img src = {happy.jpg} float = {left}/>
          <p>A college student must relive the day of her murder over and over again, in a loop that will end only when she discovers her killer's identity.</p>

          <br />
          <br />

          <br /><img src = {getout.jpg} float = {left}/>
          <p>It's time for a young African American to meet with his white girlfriend's parents for a weekend
           in their secluded estate in the woods, but before long, the friendly and polite ambience will give way to a nightmare.</p>

          <br />
          <br />

          <br /><img src = {night.jpg} float = {left}/>
          <p>Secure within a desolate home as an unnatural threat terrorizes the world, a man has established a tenuous domestic order with his wife and son. 
          Then a desperate young family arrives seeking refuge.</p>

          <br />
          <br />

        <a href='#' onClick={process.menu}>back</a>
      </div>
      </div>
      </div>
      </div>
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
  
  },
  Comedy:function(){


      ReactDOM.render(content,document.getElementById('root'));
  },
    Romance:function(){
 let content = <div className="page">
     
      ReactDOM.render(content,document.getElementById('root'));
  },
  Mystery:function(){
    let content = <div>
        this is page 2<br/><a href='#' onClick={process.menu}>back</a>
      </div>;
      ReactDOM.render(content,document.getElementById('root'));
  },
}

process.loading();
setTimeout(function(){
  process.menu();
},3000);
