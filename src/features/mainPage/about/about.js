import "./about.css"
import "./responsive.css"

export function About({toggle}) {
    return (
        <div className="about" >
            <div style={{zIndex:toggle ? "-1" : "inherit"}}><h2>About</h2></div>
            <p style={{zIndex:toggle ? "-1" : "inherit"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id facilisis adipiscing vitae nisi. Sit phasellus turpis nulla augue in quisque ultrices venenatis. Eget nunc ornare sagittis ut. Aenean in at donec etiam. Posuere commodo pellentesque sapien neque viverra nunc ut. Pellentesque pulvinar euismod etiam lorem vel. Eget mattis arcu enim odio fringilla amet diam. Lacus, ut luctus ut eget nunc. Fames fermentum elementum quam vitae tincidunt facilisis consectetur nisl. Adipiscing nullam dictumst quis donec iaculis arcu, adipiscing pharetra. A nec arcu pellentesque habitasse aliquet bibendum vestibulum interdum ornare. Ac iaculis enim, euismod massa, ut ac lorem nisl, sit.<br/><br/><br/>
                Auctor ac mattis libero adipiscing nec, lobortis. Est eget at fermentum vestibulum viverra cras. Sit enim suspendisse nulla congue egestas ut. Sed diam aenean etiam massa. Mauris proin interdum diam amet pulvinar dui. Nunc sagittis, platea egestas id egestas arcu nunc. Vel sit bibendum tincidunt senectus quam mauris urna.<br/><br/><br/>
                Ullamcorper magna varius facilisis sed tincidunt amet. Mauris tempor, dui urna facilisi id erat porttitor. Non aliquam auctor interdum accumsan est est risus. Pulvinar nunc donec leo, dignissim. Adipiscing netus metus, quis orci vestibulum. Purus vitae habitasse volutpat nunc.<br/><br/><br/>
                Vitae sit nam risus odio dignissim suspendisse adipiscing. Varius fusce urna, sit magna at enim sagittis gravida aliquam. In sed nulla lacus, ac adipiscing nulla euismod arcu. In et lacus eget odio. Eu nec enim quam viverra semper. Lorem ac est, vestibulum urna pretium tortor tellus eleifend in. Molestie at ut pharetra molestie mi sit in nec et. Nec consectetur euismod a semper tincidunt vitae aliquet libero. Eu blandit quisque donec tortor neque vel. Iaculis sed lacinia eu, vitae.<br/><br/><br/>
                Aenean ipsum posuere aenean eget sed tellus. Facilisis nunc felis quisque eget nisi, sit turpis ac proin. Ante egestas etiam viverra sem tellus diam neque tellus. Mi eu nisl dignissim aliquam vitae aliquam tempus mattis semper. Nunc aliquet imperdiet gravida eleifend semper id amet faucibus. Sit mattis in Vitae sit nam risus odio dignissim suspendisse adipiscing.<br/><br/>
                Varius fusce urna, sit magna at enim sagittis gravida aliquam. In sed nulla lacus, ac adipiscing nulla euismod arcu. In et lacus eget odio. Eu nec enim quam viverra semper. Lorem ac est, vestibulum urna pretium tortor tellus eleifend in. Molestie at ut pharetra molestie mi sit in nec et. Nec consectetur euismod a semper tincidunt vitae aliquet libero. Eu blandit quisque donec tortor neque vel. Iaculis sed lacinia eu, vitae.
            </p>
        </div>
    )
}