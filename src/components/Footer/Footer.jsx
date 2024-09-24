import React from 'react'
import stylesFooter from './Footer.module.scss'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import classNames from 'classnames'
import fb from '../../assets/icons/fb.jpg'
import x from '../../assets/icons/x.jpg'
import youtube from '../../assets/icons/youtube.jpg'
import insta from '../../assets/icons/insta.jpg'
import tiktok from '../../assets/icons/tiktok.jpg'

export default function Footer() {
  return (
    <footer>
        <h1 className={stylesFooter.footerTitle}>Ableton</h1>
        <div className={classNames(stylesFooter.firstDiv)}>
            <div className={stylesFooter.firstDivLinks}>
                <nav className={stylesFooter.textLinks}>
                    <NavLink to=''>Register Live or Push</NavLink>
                    <NavLink to='en/about'>About Ableton</NavLink>
                    <NavLink to='en/jobs'>Jobs</NavLink>
                </nav>
                <nav className={stylesFooter.socialNetworks}>
                    <NavLink to='fb'><img src={fb} alt=""/></NavLink>
                    <NavLink to='twitter'><img src={x} alt=""/></NavLink>
                    <NavLink to='toutube'><img src={youtube} alt=""/></NavLink>
                    <NavLink to='instagram'><img src={insta} alt=""/></NavLink>
                    <NavLink to='tiktok'><img src={tiktok} alt=""/></NavLink>
                </nav>
            </div>

            <div className={stylesFooter.education}>
                <h1>Education</h1>
                <nav className={stylesFooter.textLinks}>
                    <NavLink to='en/shop/education'>Offers for students and teachers</NavLink>
                    <NavLink to='en/classroom'>Ableton for the Classroom</NavLink>
                    <NavLink to='en/colleges-universities'>Ableton for Colleges and Universities</NavLink>
                </nav>
            </div>

            <div className={stylesFooter.signup}>
                <h1>Signup to our newsletter</h1>
                <p>Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more. </p>
                <form>
                    <input type="text" name="" id="" placeholder='Email address'/>
                    <button>Sign up</button> 
                </form>
            </div>
        </div>

        <div className={stylesFooter.middleDiv}>
            <div className={stylesFooter.community}>
                <h1>Community</h1>
                <nav className={stylesFooter.textLinks}>
                    <NavLink to='en/community/user-groups'>Find Ableton User Groups</NavLink>
                    <NavLink to='en/certified-training'>Find Certified Training</NavLink>
                    <NavLink to='en/education/certification-program'>Become a Certified Trainer</NavLink>
                </nav>
            </div>

            <div className={stylesFooter.langageLocation}>
                <h1>Language and Location</h1>
                <form action="">
                    <select name="language" id="language">
                        <option value="en" selected="">English</option>
                        <option value="de">Deutsch</option>
                        <option value="fr">Français</option>
                        <option value="ja">日本語</option>
                        <option value="zh-cn">简体中文</option>
                        <option value="es">Español</option>
                    </select>

                    <select name="location" id="location">
                            <option value="">Please choose</option><optgroup label="Common Countries"><option value="us">United States</option><option value="uk">United Kingdom</option><option value="fr">France</option><option value="de">Germany</option><option value="ca">Canada</option><option value="jp">Japan</option><option value="cn">China</option><option value="au">Australia</option></optgroup><optgroup label="All Countries/Regions"><option value="af">Afghanistan</option><option value="ax">Aland Islands</option><option value="al">Albania</option><option value="dz">Algeria</option><option value="as">American Samoa</option><option value="ad">Andorra</option><option value="ao">Angola</option><option value="ai">Anguilla</option><option value="aq">Antarctica</option><option value="ag">Antigua And Barbuda</option><option value="ar">Argentina</option><option value="am">Armenia</option><option value="aw">Aruba</option><option value="au">Australia</option><option value="at">Austria</option><option value="az">Azerbaijan</option><option value="bs">Bahamas</option><option value="bh">Bahrain</option><option value="bd">Bangladesh</option><option value="bb">Barbados</option><option value="by">Belarus</option><option value="be">Belgium</option><option value="bz">Belize</option><option value="bj">Benin</option><option value="bm">Bermuda</option><option value="bt">Bhutan</option><option value="bo">Bolivia</option><option value="bq">Bonaire, Sint Eustatius and Saba</option><option value="ba">Bosnia And Herzegovina</option><option value="bw">Botswana</option><option value="bv">Bouvet Island</option><option value="br">Brazil</option><option value="io">British Indian Ocean Territory</option><option value="bn">Brunei Darussalam</option><option value="bg">Bulgaria</option><option value="bf">Burkina Faso</option><option value="bi">Burundi</option><option value="kh">Cambodia</option><option value="cm">Cameroon</option><option value="ca">Canada</option><option value="cv">Cape Verde</option><option value="ky">Cayman Islands</option><option value="cf">Central African Republic</option><option value="td">Chad</option><option value="cl">Chile</option><option value="cn">China</option><option value="cx">Christmas Island</option><option value="cc">Cocos (Keeling) Islands</option><option value="co">Colombia</option><option value="km">Comoros</option><option value="cg">Congo</option><option value="cd">Congo, The Democratic Republic Of The</option><option value="ck">Cook Islands</option><option value="cr">Costa Rica</option><option value="ci" selected="">Cote D'Ivoire</option><option value="hr">Croatia</option><option value="cu">Cuba</option><option value="cw">Curacao</option><option value="cy">Cyprus</option><option value="cz">Czech Republic</option><option value="dk">Denmark</option><option value="dj">Djibouti</option><option value="dm">Dominica</option><option value="do">Dominican Republic</option><option value="ec">Ecuador</option><option value="eg">Egypt</option><option value="sv">El Salvador</option><option value="gq">Equatorial Guinea</option><option value="er">Eritrea</option><option value="ee">Estonia</option><option value="et">Ethiopia</option><option value="fk">Falkland Islands (Malvinas)</option><option value="fo">Faroe Islands</option><option value="fj">Fiji</option><option value="fi">Finland</option><option value="fr">France</option><option value="gf">French Guiana</option><option value="pf">French Polynesia</option><option value="ga">Gabon</option><option value="gm">Gambia</option><option value="ge">Georgia</option><option value="de">Germany</option><option value="gh">Ghana</option><option value="gi">Gibraltar</option><option value="gr">Greece</option><option value="gl">Greenland</option><option value="gd">Grenada</option><option value="gp">Guadeloupe</option><option value="gu">Guam</option><option value="gt">Guatemala</option><option value="gg">Guernsey</option><option value="gn">Guinea</option><option value="gw">Guinea-Bissau</option><option value="gy">Guyana</option><option value="ht">Haiti</option><option value="hm">Heard Island And McDonald Islands</option><option value="hn">Honduras</option><option value="hk">Hong Kong SAR, China</option><option value="hu">Hungary</option><option value="is">Iceland</option><option value="in">India</option><option value="id">Indonesia</option><option value="ir">Iran (Islamic Republic Of)</option><option value="iq">Iraq</option><option value="ie">Ireland</option><option value="im">Isle Of Man</option><option value="il">Israel</option><option value="it">Italy</option><option value="jm">Jamaica</option><option value="jp">Japan</option><option value="je">Jersey</option><option value="jo">Jordan</option><option value="kz">Kazakhstan</option><option value="ke">Kenya</option><option value="ki">Kiribati</option><option value="kp">Korea, Democratic People's Republic</option><option value="kr">Korea, Republic Of</option><option value="kw">Kuwait</option><option value="kg">Kyrgyzstan</option><option value="la">Lao People's Democratic Republic</option><option value="lv">Latvia</option><option value="lb">Lebanon</option><option value="ls">Lesotho</option><option value="lr">Liberia</option><option value="ly">Libya</option><option value="li">Liechtenstein</option><option value="lt">Lithuania</option><option value="lu">Luxembourg</option><option value="mo">Macao SAR, China</option><option value="mg">Madagascar</option><option value="mw">Malawi</option><option value="my">Malaysia</option><option value="mv">Maldives</option><option value="ml">Mali</option><option value="mt">Malta</option><option value="mh">Marshall Islands</option><option value="mq">Martinique</option><option value="mr">Mauritania</option><option value="mu">Mauritius</option><option value="yt">Mayotte</option><option value="mx">Mexico</option><option value="fm">Micronesia, Federated States Of</option><option value="md">Moldova, Republic Of</option><option value="mc">Monaco</option><option value="mn">Mongolia</option><option value="me">Montenegro</option><option value="ms">Montserrat</option><option value="ma">Morocco</option><option value="mz">Mozambique</option><option value="mm">Myanmar</option><option value="na">Namibia</option><option value="nr">Nauru</option><option value="np">Nepal</option><option value="nl">Netherlands</option><option value="nc">New Caledonia</option><option value="nz">New Zealand</option><option value="ni">Nicaragua</option><option value="ne">Niger</option><option value="ng">Nigeria</option><option value="nu">Niue</option><option value="nf">Norfolk Island</option><option value="mk">North Macedonia, Republic of</option><option value="mp">Northern Mariana Islands</option><option value="no">Norway</option><option value="om">Oman</option><option value="pk">Pakistan</option><option value="pw">Palau</option><option value="ps">Palestinian Territory, Occupied</option><option value="pa">Panama</option><option value="pg">Papua New Guinea</option><option value="py">Paraguay</option><option value="pe">Peru</option><option value="ph">Philippines</option><option value="pn">Pitcairn</option><option value="pl">Poland</option><option value="pt">Portugal</option><option value="pr">Puerto Rico</option><option value="qa">Qatar</option><option value="re">Reunion</option><option value="ro">Romania</option><option value="ru">Russian Federation</option><option value="rw">Rwanda</option><option value="sh">Saint Helena</option><option value="kn">Saint Kitts And Nevis</option><option value="lc">Saint Lucia</option><option value="mf">Saint Martin (French Part)</option><option value="pm">Saint Pierre And Miquelon</option><option value="vc">Saint Vincent And The Grenadines</option><option value="ws">Samoa</option><option value="sm">San Marino</option><option value="st">Sao Tome And Principe</option><option value="sa">Saudi Arabia</option><option value="sn">Senegal</option><option value="rs">Serbia</option><option value="sc">Seychelles</option><option value="sl">Sierra Leone</option><option value="sg">Singapore</option><option value="sx">Sint Maarten</option><option value="sk">Slovakia</option><option value="si">Slovenia</option><option value="sb">Solomon Islands</option><option value="so">Somalia</option><option value="za">South Africa</option><option value="gs">South Georgia And The South Sandwich Islands</option><option value="ss">South Sudan</option><option value="es">Spain</option><option value="ic">Canary Islands (Spain)</option><option value="lk">Sri Lanka</option><option value="sd">Sudan</option><option value="sr">Suriname</option><option value="sj">Svalbard And Jan Mayen</option><option value="sz">Swaziland</option><option value="se">Sweden</option><option value="ch">Switzerland</option><option value="sy">Syrian Arab Republic</option><option value="tw">Taiwan</option><option value="tj">Tajikistan</option><option value="tz">Tanzania, United Republic Of</option><option value="tf">Territory of the French Southern and Antarctic Lands</option><option value="th">Thailand</option><option value="tl">Timor-Leste</option><option value="tg">Togo</option><option value="tk">Tokelau</option><option value="to">Tonga</option><option value="tt">Trinidad And Tobago</option><option value="tn">Tunisia</option><option value="tr">Turkey</option><option value="tm">Turkmenistan</option><option value="tc">Turks And Caicos Islands</option><option value="tv">Tuvalu</option><option value="ug">Uganda</option><option value="ua">Ukraine</option><option value="ae">United Arab Emirates</option><option value="uk">United Kingdom</option><option value="us">United States</option><option value="um">United States Minor Outlying Islands</option><option value="uy">Uruguay</option><option value="uz">Uzbekistan</option><option value="vu">Vanuatu</option><option value="va">Vatican City State (Holy See)</option><option value="ve">Venezuela</option><option value="vn">Viet Nam</option><option value="vg">Virgin Islands (British)</option><option value="vi">Virgin Islands (U.S.)</option><option value="wf">Wallis And Futuna</option><option value="eh">Western Sahara</option><option value="ye">Yemen</option><option value="zm">Zambia</option><option value="zw">Zimbabwe</option></optgroup>
                    </select>
                </form>
            </div>
        </div>

        <div className={stylesFooter.firstLastDiv}>
            <img src={logo} alt="Logo" />
            <small>Made in Berlin</small>
        </div>

        <div className={stylesFooter.lastLastDiv}>
            <div className={stylesFooter.left}>
                <NavLink to='en/contact-us'><small>Contact us</small></NavLink>
                <NavLink to='en/press'><small>Press Resources</small></NavLink>
                <NavLink to='en/legal'><small>Legal Info</small></NavLink>
                <NavLink to='en/privacy-policy'><small>Privacy Policy</small></NavLink>
                <NavLink to='en/cookie-settingd'><small>Cookie Settings</small></NavLink>
                <NavLink to='en/imprint'><small>Imprint</small></NavLink>
            </div>
            <div className={stylesFooter.right}>
                <small>Made in Berlin</small>
                <img src={logo} alt="Logo" />
            </div>
        </div>
    </footer>
  )
}
