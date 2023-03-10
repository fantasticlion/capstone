import './App.css';
import {useState} from 'react';

function App() {
  return (
    <div className = "App">
      <div className = "product-cards">
      <div className='secondbutton'><a href="https://www.mville.edu/">Mville.edu</a> | <a href="https://www.mville.edu/my-mville">MyMville</a> | <a href="https://blackboard.mville.edu/">Blackboard</a> | <a href="https://servicehub.mville.edu/Student/Account/Login?ReturnUrl=%2fstudent">ServiceHub</a> | <a href="http://directory.mville.edu/">Campus Directory</a> | <a href="https://www.aaiscloud.com/Manhattanville/Calendars/ActivityCalendar.aspx?calendarId=31ac6080-3dcd-11e4-a0e1-997993bdf9b0">Campus Calendar</a> | <a href="https://authn.sd00.worldcat.org/wayf/metaauth-ui/cmnd/protocol/samlpost">My Library Items</a></div>
      
      <img src="https://libapps.s3.amazonaws.com/accounts/222921/images/banner_january_22.png" 
          width="888"></img>
      
      <div className='barbutton'><a href="https://mville.libguides.com/c.php?g=370039&p=2501018">Citation</a></div>
      <div className='barbutton'><a href="https://mville.libguides.com/c.php?g=370039&p=2500402">Books and Ebooks</a></div>
      <div className='barbutton'><a href="https://mville.libguides.com/c.php?g=370039&p=2500425">Podcasts</a></div>
      <div className='barbutton'><a href="https://fantasticlion.github.io/capstone">Websites</a></div>
      <div className='barbutton'><a href="https://mville.libguides.com/c.php?g=370039&p=2500349">Home</a></div>
      <div className='navbutton'><a href="https://mville.libguides.com/libraryhome">Manhattanville College Library</a> / <a href="https://mville.libguides.com/">Library Guides</a> / <a href="https://mville.libguides.com/mathcomputer">Math and Computer Science</a> / Websites</div>
      <div className='navbutton'>A starting point for research in math and computer science.</div>
        <div className = "product"> 

          <div className="item">
            <button>{"Portals and Gateways"}</button>
            <img src={"https://www.library.northwestern.edu/images/libraries-collections/mathematics-chalkboards.jpg"}></img>
            <ul>
              <li><a href="https://www.emis.de/ELibM.html">Electronic Library of Mathematics</a></li>
              <li><a href="https://www.nctm.org/classroomresources/">Math Forum @ Drexel</a></li>
              <li><a href="https://www.maa.org/about-maa/maa-history/mathdl">MathDL: The Maa Mathematical Sciences Digital Library</a></li>
              <li><a href="http://www.sosmath.com/wwwsites.html">S.O.S. Mathematics: Sites of Interest</a></li>
              <li><a href="https://www.scicentral.com/index.html">SciCentral</a></li>
              <li><a href="https://www.siam.org/">SIAM - Society for Industrial and Applied Mathematics</a></li>
            </ul>
          </div>

          <div className="item">
            <button>{"Computer Science Websites"}</button>
            <img src={"https://al.nd.edu//assets/380450/1200x630/bacs_code.jpg"}></img>
            <ul>
              <li><a href="https://www.acm.org/">Association for Computing Machinery (ACM)</a></li>
              <li><a href="https://aisnet.org/default.aspx">Association for Information Systems (AIS)</a></li>
              <li><a href="https://cra.org/">Computing Research Association (CRA)</a></li>
              <li><a href="https://www.ieee.org/">IEEE</a></li>
              <li><a href="https://developer.ibm.com/languages/java/">Java Tutorials from IBM DeveloperWorks</a></li>
              <li><a href="https://www.sciencedaily.com/news/computers_math/computer_science/">Science Daily</a></li>
              <li><a href="https://www.informationweek.com/">Information Week</a></li>
            </ul>
          </div>

          <div className="item">
            <button>{"Math Websites"}</button>
            <img src={"https://www.stoodnt.com/blog/wp-content/uploads/2021/01/Websites-for-Teaching-and-Learning-Math.jpg"}></img>
            <ul>
              <li><a href="https://www.ams.org/home/page">American Mathematical Society</a></li>
              <li><a href="https://arxiv.org/">arXiv.org</a></li>
              <li><a href="http://www.math-atlas.org/">Math Atlas</a></li>
              <li><a href="https://www.nctm.org/classroomresources/">Math Forum @ Drexel</a></li>
              <li><a href="http://math2.org/">Math2.org</a></li>
              <li><a href="https://www.maa.org/">Mathematical Association of America</a></li>
              <li><a href="http://www.sosmath.com/tables/tables.html">S.O.S Mathematics: Tables and Formulas</a></li>
              <li><a href="https://mathshistory.st-andrews.ac.uk/">The MACTutor History of Mathematics Archive</a></li>
              <li><a href="https://functions.wolfram.com/">Wolfram Functions</a></li>
            </ul>
          </div>

          <div className="item">
            <button>Library Director</button>
            <img src={"https://libapps.s3.amazonaws.com/accounts/61742/profiles/53133/New_Profile_Raw.jpg"}></img>
            <h3>Jeff Rosedale</h3>
            <div className='subbutton'><a href="mailto: jeff.rosedale@mville.edu">Email Me</a></div>
            <h3>Contact:</h3>
            <ul>
              <li>2900 Purchase Street</li>
              <li>Room LIB-017</li>
              <li>Purchase, NY 10577</li>
              <li>914-323-5277</li>
              </ul>
            <h3>Subjects:</h3>
            <ul>
              <li><a href="https://mville.libguides.com/sb.php?subject_id=74340">African Studies</a>, <a href="https://mville.libguides.com/sb.php?subject_id=69406">Anthropology</a>, <a href="https://mville.libguides.com/sb.php?subject_id=69394">Communications</a>, <a href="https://mville.libguides.com/sb.php?subject_id=74345">Computer Science</a>, <a href="https://mville.libguides.com/sb.php?subject_id=74351">International Studies</a>, <a href="https://mville.libguides.com/sb.php?subject_id=74344">Mathematics</a>, <a href="https://mville.libguides.com/sb.php?subject_id=74336">Sociology</a></li>
            </ul>
          </div>
          <div className='secondnavbutton'>Last Updated: Aug 28, 2022 4:44 PM | URL: https://mville.libguides.com/mathcomputer | <a href="javascript: window.print();"><i class="fa fa-print" aria-hidden="true" title="Print Page"></i> Print Page</a> subjects: <a href="https://mville.libguides.com/sb.php?subject_id=74345">computer science</a>, <a href="https://mville.libguides.com/sb.php?subject_id=74344">mathematics</a></div>
          <div className="thirdbutton"><a href="https://mville.libapps.com/libapps/login.php?site_id=6353&target64=L2xpYmd1aWRlcy9hZG1pbl9jLnBocD9nPTM3MDAzOSZwPTI1MDAzNTU=">Login to LibApps</a> <a href="mailto: library@mville.edu">Report a problem</a></div>
        </div>
      </div>
    </div>);
}

export default App;
