function generate() {
    const form = document.getElementById('choice-form');
    const selectedType = form.querySelector('input[name="type"]:checked');
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let password = ""
    if (selectedType.value === "type1") {
        for (let i = 1; i < 30; i++) {
            if (i%6 === 0) {
                password += "-"
            } 
            else {
                const randomIndex = Math.floor(Math.random() * charset.length)
                password += charset[randomIndex]
            }
        }
    } 
    else {
        charset = charset + "!@#$%^&*()_+-=[]{}|;:,.<>?"
        for (let i = 1; i < 24; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length)
            password += charset[randomIndex]
        }
    }
    document.getElementById("password-el").textContent = password;
}


function copy_to_clipboard() {
    const element = document.getElementById("password-el");
    
    navigator.clipboard.writeText(element.innerText)
        .then(() => {
            show_notification();
        })
        .catch(err => {
            show_error();
        });
}

function show_notification() {
    const notification = document.getElementById("copy-notification");
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 2000); // Hide notification after 2 seconds
}
function show_error() {
    const notification = document.getElementById("error-notification");
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 2000); // Hide notification after 2 seconds
}