const sportSelect = document.getElementById("sport")
const roleContainer= document.getElementById("role_container")

if (sportSelect && roleContainer){
    sportSelect.addEventListener("change", function(){
        const sport= this.value;

        if (sport ==="soccer"){
            roleContainer.innerHTML=`
                <p class="intake_text">What is your position?</p>
                <select id="role" name="role">
                    <option value="">Select a Position</option>
                    <option value="goalkeeper">Goalkeeper</option>
                    <option value="defender">Defender</option>
                    <option value="midfielder">Midfielder</option>
                    <option value="forward">Forward</option>
                </select>
            `;
        }
        else if (sport=== "basketball"){
            roleContainer.innerHTML=`
                <p class="intake_text">What is your position?</p>
                <select id="role" name="role">
                    <option value="">Select a Position</option>
                    <option value="guard">Guard</option>
                    <option value="forward">Forward</option>
                    <option value="center">Center</option>
                </select>
            `;
        }
        else if (sport ==="volleyball"){
            roleContainer.innerHTML=`
                <p class="intake_text">What is your position?</p>
                <select id="role" name="role">
                    <option value="">Select a Position</option>
                    <option value="setter">Setter</option>
                    <option value="libero">Libero</option>
                    <option value="outside">Outside</option>
                    <option value="middle">Middle Blocker</option>
                    <option value="opposite">Opposite</option>
                </select>
            `;
        }
        else if (sport === "track"){
            roleContainer.innerHTML=`
                <p class="intake_text">What is your event?</p>
                <input type="text" id="role" name="role" placeholder="e.g. 100m, Long Jump, 800m">
            `;

        }
        else if (sport=== "wrestling"){
            roleContainer.innerHTML=`
                <p class="intake_text">What is your style or weight class?</p>
                <input type="text" id="role" name="role" placeholder="e.g. Freestyle, 72 kg">
            `;
        }
        else if (sport === "swimming"){
            roleContainer.innerHTML=`
                <p class="intake_text"> What is your primary event or stroke?</p>
                <input type="text" id="role" name="role" placeholder="e.g. Freestyle, Butterfly, 100m Backstroke">
            `;
        }
        else if (sport === "tennis"){
            roleContainer.innerHTML =`
                <p class="intake_text">What is your role?</p>
                <select id="role" name="role">
                    <option value="">Select One</option>
                    <option value="singles">Singles</option>
                    <option value="doubles">Doubles</option>
                </select>
            `;
        }
        else if (sport ==="badminton"){
            roleContainer.innerHTML =`
                <p class="intake_text">What is your role?</p>
                <select id="role" name="role">
                    <option value="">Select One</option>
                    <option value="singles">Singles</option>
                    <option value="doubles">Doubles</option>
                </select>
            `;
        }
        else if (sport === "other"){
            roleContainer.innerHTML=`
                <p class="intake_text">What is your position, event, or competitive role?</p>
                <input type="text" id="role" name="role" placeholder="Enter your role">
            `;
        }
        else {
            roleContainer.innerHTML="";
        }


    });
}
