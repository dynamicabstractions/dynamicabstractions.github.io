document.addEventListener('DOMContentLoaded', function() {
    var tooltipContainers = document.querySelectorAll('.tooltip-container');
    var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches; // or use touch event detection

    if (isMobile) {
        tooltipContainers.forEach(function(container) {
            container.addEventListener('click', function() {
                var tooltip = this.querySelector('.tooltip');
                var isVisible = tooltip.style.visibility === 'visible';
                // Hide any open tooltips before showing a new one
                document.querySelectorAll('.tooltip').forEach(function(tip) {
                    tip.style.visibility = 'hidden';
                });
                // Toggle this tooltip
                tooltip.style.visibility = isVisible ? 'hidden' : 'visible';
            });
        });
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.tooltip-container')) {
                document.querySelectorAll('.tooltip').forEach(function(tooltip) {
                    tooltip.style.visibility = 'hidden';
                });
            }
        });
    }
});

// // If you need the tooltip to display only after a certain delay or to handle more complex behaviors (like disabling the tooltip under certain conditions), you might use JavaScript:
// document.querySelectorAll('.tooltip-click').forEach(item => {
//     item.addEventListener('click', function(event) {
//         event.stopPropagation(); // Prevents click from bubbling to navigation trigger
//         var tooltip = this.querySelector('.tooltip');
//         if (tooltip.style.visibility === 'visible') {
//             tooltip.style.visibility = 'hidden';
//         } else {
//             tooltip.style.visibility = 'visible';
//         }
//     });
// });

// document.querySelector('.grid-container').addEventListener('click', function() {
//     document.querySelectorAll('.tooltip-click').forEach(item => {
//         item.style.visibility === 'hidden';
//     });
//     // var tooltip = this.querySelector('.tooltip');
//     // if (tooltip.style.visibility === 'visible') {
//     //     tooltip.style.visibility = 'hidden';
//     // }
// });

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

// var newWindow = window.open(url, '_blank');
// if (!newWindow) {
//     // Inform the user that the popup was blocked
//     alert("Popup was blocked by the browser");
// }
// else {
//     newWindow.focus();
// }
