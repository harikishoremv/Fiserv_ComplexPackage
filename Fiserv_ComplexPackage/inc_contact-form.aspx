<form name="the-form" class="validate-form ajax-form" id="the-form" method="post">
    <section>
        <!-- 
        <label>
            <select name="Reason-for-Inquiry">
                <option value="">-- Select One --</option>
                <option value="Online Banking">Online Banking</option>
                <option value="Credit Card Services">Credit Card Services</option>
                <option value="Other Questions">Other Questions</option>
            </select>
            <span class="label">Reason for Inquiry</span>
        </label>
        -->
        <label>
            <input type="text" name="Name" placeholder=" " required>
		    <span class="label">Name</span>
        </label>
        <label>
            <input type="tel" name="Phone" placeholder=" " pattern="^([\\(]+[0-9]{3}[\\)]+|[0-9]{3})[- .]*[0-9]{3}[-.]*[0-9]{4}$">
		    <span class="label">Phone</span>
            <span class="error">This is not a valid phone number.</span>
        </label>
        <label>
            <input type="email" name="Email" placeholder=" " pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$" required>
		    <span class="label">Email</span>
        </label>
        <!--
        <label>
            <input type="text" name="Address-Line-1" placeholder=" " required>
            <span class="label">Address Line 1</span>
        </label>
        <label>
            <input type="text" name="Address-Line-2" placeholder=" ">
            <span class="label">Address Line 2</span>
        </label>
        <label class="thirds">
            <input type="text" name="City" placeholder=" " required>
            <span class="label">City</span>
        </label>
        <label class="thirds">
            <select name="State" required>
                <option value="">Select State</option>
                <option>Alabama</option>
                <option>Alaska</option>
                <option>Arizona</option>
                <option>Arkansas</option>
                <option>California</option>
                <option>Colorado</option>
                <option>Connecticut</option>
                <option>Delaware</option>
                <option>District of Columbia</option>
                <option>Florida</option>
                <option>Georgia</option>
                <option>Hawaii</option>
                <option>Idaho</option>
                <option>Illinois</option>
                <option>Indiana</option>
                <option>Iowa</option>
                <option>Kansas</option>
                <option>Kentucky</option>
                <option>Louisiana</option>
                <option>Maine</option>
                <option>Maryland</option>
                <option>Massachusetts</option>
                <option>Michigan</option>
                <option>Minnesota</option>
                <option>Mississippi</option>
                <option>Missouri</option>
                <option>Montana</option>
                <option>Nebraska</option>
                <option>Nevada</option>
                <option>New Hampshire</option>
                <option>New Jersey</option>
                <option>New Mexico</option>
                <option>New York</option>
                <option>North Carolina</option>
                <option>North Dakota</option>
                <option>Ohio</option>
                <option>Oklahoma</option>
                <option>Oregon</option>
                <option>Pennsylvania</option>
                <option>Rhode Island</option>
                <option>South Carolina</option>
                <option>South Dakota</option>
                <option>Tennessee</option>
                <option>Texas</option>
                <option>Utah</option>
                <option>Vermont</option>
                <option>Virginia</option>
                <option>Washington</option>
                <option>West Virginia</option>
                <option>Wisconsin</option>
                <option>Wyoming</option>
            </select>
            <span class="label">State</span>
        </label>
        <label class="thirds">
            <input type="text" name="ZIP-Code" placeholder=" " required>
            <span class="label">ZIP Code</span>
        </label>
        -->
        <label>
            <textarea name="Comments" placeholder=" " required></textarea>
		    <span class="label">Comments</span>
        </label>
        <label>
		    <input type="checkbox" name="Non-Secure-Acknowledgement" required>
            <span class="label">I acknowledge this is not a secure form of communication. I understand sensitive information should not be sent through this form.</span>
        </label>
        <input type="hidden" name="captcha2" value="" rel="8" class="captcha" />
	    <label>
		    <input type="text" class="captchaAnswer" name="captchaAnswer" value="" placeholder=" " required/>
		    <span class="label">Type the numbers you see above:</span>
	    </label>
        <button type="submit" class="Button1">Submit</button>
    </section>
</form>