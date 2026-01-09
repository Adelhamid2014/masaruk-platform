// رسالة ترحيب عند فتح الصفحة
window.onload = function() {
    console.log("مرحباً بكم في منصة مسارك");
    
    // تحميل البيانات المحفوظة إن وجدت
    if(localStorage.getItem('مسارك_الاسم')) {
        document.getElementById('userName').value = localStorage.getItem('مسارك_الاسم');
    }
};

// دالة لحفظ اسم المستخدم
function saveName() {
    const name = document.getElementById('userName').value;
    if(name) {
        localStorage.setItem('مسارك_الاسم', name);
        alert(`مرحباً ${name}! تم حفظ بياناتك.`);
    }
}

// دالة لإظهار إشعار
function showNotification(message) {
    alert(message);
}

// دالة بسيطة للمحادثة
function chatResponse(question) {
    const responses = {
        "السلام عليكم": "وعليكم السلام ورحمة الله وبركاته! كيف يمكنني مساعدتك؟",
        "شكراً": "العفو! نحن هنا لخدمتك دائماً",
        "مساعدة": "أنا هنا لأجيب على استفساراتك القضائية"
    };
    
    return responses[question] || "عذراً، لم أفهم سؤالك. هل يمكنك إعادة صياغته؟";
}