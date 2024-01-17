document.addEventListener('alpine:init', () => {
    // main section
    Alpine.data('scrollToTop', () => ({
        showTopButton: false,
        init() {
            window.onscroll = () => {
                this.scrollFunction();
            };
        },

        scrollFunction() {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                this.showTopButton = true;
            } else {
                this.showTopButton = false;
            }
        },

        goToTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
    }));

    // theme customization
    Alpine.data('customizer', () => ({
        showCustomizer: false,
    }));

    // sidebar section
    Alpine.data('sidebar', () => ({
        init() {
            const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
            if (selector) {
                selector.classList.add('active');
                const ul = selector.closest('ul.sub-menu');
                if (ul) {
                    let ele = ul.closest('li.menu').querySelectorAll('.nav-link');
                    if (ele) {
                        ele = ele[0];
                        setTimeout(() => {
                            ele.click();
                        });
                    }
                }
            }
        },
    }));

    // header section
    Alpine.data('header', () => ({
        init() {
            const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
            if (selector) {
                selector.classList.add('active');
                const ul = selector.closest('ul.sub-menu');
                if (ul) {
                    let ele = ul.closest('li.menu').querySelectorAll('.nav-link');
                    if (ele) {
                        ele = ele[0];
                        setTimeout(() => {
                            ele.classList.add('active');
                        });
                    }
                }
            }
        },

        notifications: [
            {
                id: 1,
                profile: 'avatar.svg',
                message: '<strong class="text-sm mr-1">User Name</strong>invite you to <strong>Prototyping</strong>',
                time: '45 min ago',
            },
            {
                id: 2,
                profile: 'avatar.svg',
                message: '<strong class="text-sm mr-1">Adam Nolan</strong>mentioned you to <strong>UX Basics</strong>',
                time: '9h Ago',
            },
            {
                id: 3,
                profile: 'avatar.svg',
                message: '<strong class="text-sm mr-1">Anna Morgan</strong>Upload a file',
                time: '9h Ago',
            },
        ],

        messages: [
            {
                id: 1,
                image: '<span class="grid place-content-center w-9 h-9 rounded-full bg-success-light dark:bg-success text-success dark:text-success-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span>',
                title: 'Congratulations!',
                message: 'Your OS has been updated.',
                time: '1hr',
            },
            {
                id: 2,
                image: '<span class="grid place-content-center w-9 h-9 rounded-full bg-info-light dark:bg-info text-info dark:text-info-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg></span>',
                title: 'Did you know?',
                message: 'You can switch between artboards.',
                time: '2hr',
            },
            {
                id: 3,
                image: '<span class="grid place-content-center w-9 h-9 rounded-full bg-danger-light dark:bg-danger text-danger dark:text-danger-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>',
                title: 'Something went wrong!',
                message: 'Send Reposrt',
                time: '2days',
            },
            {
                id: 4,
                image: '<span class="grid place-content-center w-9 h-9 rounded-full bg-warning-light dark:bg-warning text-warning dark:text-warning-light"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">    <circle cx="12" cy="12" r="10"></circle>    <line x1="12" y1="8" x2="12" y2="12"></line>    <line x1="12" y1="16" x2="12.01" y2="16"></line></svg></span>',
                title: 'Warning',
                message: 'Your password strength is low.',
                time: '5days',
            },
        ],

        languages: [
            {
                id: 3,
                key: 'English',
                value: 'en',
            }, {
                id: 16,
                key: 'عربي',
                value: 'omr',
            },
        ],

        removeNotification(value) {
            this.notifications = this.notifications.filter((d) => d.id !== value);
        },

        removeMessage(value) {
            this.messages = this.messages.filter((d) => d.id !== value);
        },
    }));

    Alpine.data('auth', () => ({
        languages: [
            {
                id: 3,
                key: 'English',
                value: 'en',
            }, {
                id: 16,
                key: 'عربي',
                value: 'omr',
            },
        ],
    }));

    //notes
    Alpine.data('notes', () => ({
        defaultParams: {
            id: null,
            title: '',
            description: '',
            tag: '',
            user: '',
            thumb: '',
        },
        isAddNoteModal: false,
        isDeleteNoteModal: false,
        isViewNoteModal: false,
        params: {
            id: null,
            title: '',
            description: '',
            tag: '',
            user: '',
            thumb: '',
        },
        isShowNoteMenu: true,
        notesList: [{
                id: 1,
                user: 'Sridhar T',
                thumb: 'userProfile/sri.jpg',
                title: 'Meeting with Kelly',
                description: 'Curabitur facilisis vel elit sed dapibus sodales purus rhoncus.',
                date: '11/01/2023',
                isFav: false,
                tag: 'personal',
            }, {
                id: 2,
                user: 'User Name',
                thumb: 'userProfile/profile-3.jpg',
                title: 'Receive Package',
                description: 'Facilisis curabitur facilisis vel elit sed dapibus sodales purus.',
                date: '11/02/2023',
                isFav: true,
                tag: 'work',
            }, {
                id: 3,
                user: 'User Name',
                thumb: 'userProfile/profile-1.jpg',
                title: 'Download Docs',
                description: 'Proin a dui malesuada, laoreet mi vel, imperdiet diam quam laoreet.',
                date: '11/04/2023',
                isFav: false,
                tag: 'social',
            }, {
                id: 4,
                user: 'User Name',
                thumb: 'userProfile/profile-2.jpg',
                title: 'Meeting at 4:50pm',
                description: 'Excepteur sint occaecat cupidatat non proident, anim id est laborum.',
                date: '11/08/2023',
                isFav: false,
                tag: 'important',
            },
        ],
        filterdNotesList: '',
        selectedTab: 'all',
        deletedNote: null,
        selectedNote: {
            id: null,
            title: '',
            description: '',
            tag: '',
            user: '',
            thumb: '',
        },

        init() {
            this.searchNotes();
        },

        searchNotes() {
            if (this.selectedTab != 'fav') {
                if (this.selectedTab != 'all' || this.selectedTab === 'delete') {
                    this.filterdNotesList = this.notesList.filter((d) => d.tag === this.selectedTab);
                } else {
                    this.filterdNotesList = this.notesList;
                }
            } else {
                this.filterdNotesList = this.notesList.filter((d) => d.isFav);
            }
        },

        saveNote() {
            if (!this.params.title) {
                this.showMessage('Title is required.', 'error');
                return false;
            }
            if (this.params.id) {
                //update task
                let note = this.notesList.find((d) => d.id === this.params.id);
                note.title = this.params.title;
                note.user = this.params.user;
                note.description = this.params.description;
                note.tag = this.params.tag;
            } else {
                //add note
                let maxNoteId = this.notesList.length
                    ? this.notesList.reduce((max, character) => (character.id > max ? character.id : max), this.notesList[0].id)
                    : 0;
                if (!maxNoteId) {
                    maxNoteId = 0;
                }
                let dt = new Date();
                let note = {
                    id: maxNoteId + 1,
                    title: this.params.title,
                    user: this.params.user,
                    thumb: '',
                    description: this.params.description,
                    date: dt.getDate() + '/' + Number(dt.getMonth()) + 1 + '/' + dt.getFullYear(),
                    isFav: false,
                    tag: this.params.tag,
                };
                this.notesList.splice(0, 0, note);
                this.searchNotes();
            }

            this.showMessage('Note has been saved successfully.');
            this.isAddNoteModal = false;
            this.searchNotes();
        },

        tabChanged(type) {
            this.selectedTab = type;
            this.searchNotes();
            this.isShowNoteMenu = false;
        },

        setFav(note) {
            let item = this.filterdNotesList.find((d) => d.id === note.id);
            item.isFav = !item.isFav;
            this.searchNotes();
        },

        setTag(note, name) {
            let item = this.filterdNotesList.find((d) => d.id === note.id);
            item.tag = name;
            this.searchNotes();
        },

        deleteNoteConfirm(note) {
            setTimeout(() => {
                this.deletedNote = note;
                this.isDeleteNoteModal = true;
            });
        },

        viewNote(note) {
            setTimeout(() => {
                this.selectedNote = note;
                this.isViewNoteModal = true;
            });
        },

        editNote(note) {
            this.isShowNoteMenu = false;
            setTimeout(() => {
                this.params = JSON.parse(JSON.stringify(this.defaultParams));
                if (note) {
                    this.params = JSON.parse(JSON.stringify(note));
                }
                this.isAddNoteModal = true;
            });
        },

        deleteNote() {
            this.notesList = this.notesList.filter((d) => d.id != this.deletedNote.id);
            this.searchNotes();
            this.showMessage('Note has been deleted successfully.');
            this.isDeleteNoteModal = false;
        },

        showMessage(msg = '', type = 'success') {
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: type,
                title: msg,
                padding: '10px 20px',
            });
        },
    }));

    //chat
    Alpine.data('chat', () => ({
        isShowUserChat: false,
        isShowChatMenu: false,
        loginUser: {
            id: 0,
            name: 'Ahlam Hilal Khamis Alrasbi',
            thumb: 'userProfile/profile-3.jpg',
            designation: 'Admin',
        },
        defaultParams: {
            id: null,
            title: '',
            description: '',
            tag: '',
            user: '',
            thumb: '',
        },
        isAddDiscussionsModal: false,
        params: {
            id: null,
            title: '',
            description: '',
            tag: '',
            user: '',
            thumb: '',
        },
        contactList: [{
                id: 1,
                title: 'Discussion title here 1',
                thumb: 'userProfile/profile-1.jpg',
                description: 'Description Discussion 1',
                date: '1 Jan 2024',
                user: 'User Name 1',
                reply: '6 Replies',
                messages: [{
                        fromUserId: 0,
                        toUserId: 1,
                        text: 'Hi, I am back from vacation',
                    }, {
                        fromUserId: 1,
                        toUserId: 0,
                        text: 'Welcome Back',
                    },
                ],
                active: true,
            }, {
                id: 2,
                title: 'Discussion title here 2',
                thumb: 'userProfile/profile-2.jpg',
                description: 'Description Discussion 2',
                date: '2 Jan 2024',
                user: 'User Name 2',
                reply: '4 Replies',
                messages: [ {
                        fromUserId: 0,
                        toUserId: 2,
                        text: 'Hello',
                    }, {
                        fromUserId: 2,
                        toUserId: 0,
                        text: "It's me",
                    },
                ],
                active: false,
            }, {
                id: 3,
                title: 'Discussion title here 3',
                thumb: 'userProfile/sri.jpg',
                description: 'Description Discussion 3',
                date: '3 Jan 2024',
                user: 'User Name 3',
                reply: '6 Replies',
                messages: [{
                        fromUserId: 0,
                        toUserId: 3,
                        text: 'Hey Buddy.',
                    }, {
                        fromUserId: 3,
                        toUserId: 0,
                        text: 'I am good',
                    },
                ],
                active: true,
            }, {
                id: 4,
                title: 'Discussion title here 4',
                thumb: 'userProfile/satish.jpg',
                description: 'Description Discussion 4',
                date: '4 Jan 2024',
                user: 'User Name 4',
                reply: '2 Replies',
                messages: [{
                        fromUserId: 0,
                        toUserId: 4,
                        text: 'Hi, collect your check',
                    }, {
                        fromUserId: 4,
                        toUserId: 0,
                        text: 'Ok, I will be there in 10 mins',
                    },
                ],
                active: false,
                call: true,
            }, {
                id: 5,
                title: 'Discussion title here 5',
                thumb: 'userProfile/vinod.jpg',
                description: 'Description Discussion 5',
                date: '3 Jan 2024',
                user: 'User Name 5',
                reply: '5 Replies',
                messages: [{
                        fromUserId: 0,
                        toUserId: 5,
                        text: 'Hi, I am back from vacation',
                    },
                    {
                        fromUserId: 5,
                        toUserId: 0,
                        text: 'How are you?',
                    },
                ],
                active: false,
                away: true,
            }, {
                id: 6,
                title: 'Discussion title here 6',
                thumb: 'userProfile/santosh.jpg',
                description: 'Description Discussion 6',
                date: '3 Jan 2024',
                user: 'User Name 6',
                reply: '4 Replies',
                messages: [
                    {
                        fromUserId: 0,
                        toUserId: 6,
                        text: 'Hi',
                    },
                    {
                        fromUserId: 6,
                        toUserId: 0,
                        text: 'Uploaded files to server.',
                    },
                ],
                active: false,
            },
        ],
        searchUser: '',
        textMessage: '',
        selectedUser: '',

        get searchUsers() {
            setTimeout(() => {
                const element = document.querySelector('.chat-users');
                element.scrollTop = 0;
                element.behavior = 'smooth';
            });
            return this.contactList.filter((d) => {
                return d.title.toLowerCase().includes(this.searchUser);
            });
        },

        selectUser(user) {
            this.selectedUser = user;
            this.isShowUserChat = true;
            this.scrollToBottom;
            this.isShowChatMenu = false;
        },

        sendMessage() {
            if (this.textMessage.trim()) {
                const user = this.contactList.find((d) => d.id === this.selectedUser.id);
                user.messages.push({
                    fromUserId: this.selectedUser.id,
                    toUserId: 0,
                    text: this.textMessage,
                    date: 'Just now',
                });
                this.textMessage = '';
                this.scrollToBottom;
            }
        },

        get scrollToBottom() {
            if (this.isShowUserChat) {
                setTimeout(() => {
                    const element = document.querySelector('.chat-conversation-box');
                    element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'end',
                    });
                });
            }
        },

        saveDiscussions() {
            if (!this.params.title) {
                this.showMessage('Title is required.', 'error');
                return false;
            }
            if (this.params.id) {
                //update task
                let note = this.contactList.find((d) => d.id === this.params.id);
                note.title = this.params.title;
                note.user = this.params.user;
                note.description = this.params.description;
                note.tag = this.params.tag;
            } else {
                //add note
                let maxNoteId = this.contactList.length
                    ? this.contactList.reduce((max, character) => (character.id > max ? character.id : max), this.contactList[0].id)
                    : 0;
                if (!maxNoteId) {
                    maxNoteId = 0;
                }
                let dt = new Date();
                let note = {
                    id: maxNoteId + 1,
                    title: this.params.title,
                    user: this.params.user,
                    thumb: '',
                    description: this.params.description,
                    date: dt.getDate() + ' ' + Number(dt.getMonth()) + 1 + ' ' + dt.getFullYear(),
                    reply: '0 Replies',
                    tag: this.params.tag,
                };
                this.contactList.splice(0, 0, note);
                //this.selectUser();
            }

            this.showMessage('Discussions has been saved successfully.');
            this.isAddDiscussionsModal = false;
        },

        editDiscussions(note) {
            this.isShowNoteMenu = false;
            setTimeout(() => {
                this.params = JSON.parse(JSON.stringify(this.defaultParams));
                if (note) {
                    this.params = JSON.parse(JSON.stringify(note));
                }
                this.isAddDiscussionsModal = true;
            });
        },

        showMessage(msg = '', type = 'success') {
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: type,
                title: msg,
                padding: '10px 20px',
            });
        },

    }));

    //calendar
    Alpine.data('calendar', () => ({
        defaultParams: {
            id: null,
            title: '',
            start: '',
            end: '',
            description: '',
            type: 'primary',
        },
        params: {
            id: null,
            title: '',
            start: '',
            end: '',
            description: '',
            type: 'primary',
        },
        isAddEventModal: false,
        minStartDate: '',
        minEndDate: '',
        calendar: null,
        now: new Date(),
        events: [],
        init() {
            this.events = [
                {
                    id: 1,
                    title: 'All Day Event',
                    start: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-01T14:30:00',
                    end: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-02T14:30:00',
                    className: 'danger',
                    description:
                        'Aenean fermentum quam vel sapien rutrum cursus. Vestibulum imperdiet finibus odio, nec tincidunt felis facilisis eu.',
                },
                {
                    id: 2,
                    title: 'Site Visit',
                    start: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-07T19:30:00',
                    end: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-08T14:30:00',
                    className: 'primary',
                    description: 'Etiam a odio eget enim aliquet laoreet. Vivamus auctor nunc ultrices varius lobortis.',
                },
                {
                    id: 3,
                    title: 'Product Lunching Event',
                    start: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-17T14:30:00',
                    end: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-18T14:30:00',
                    className: 'info',
                    description:
                        'Proin et consectetur nibh. Mauris et mollis purus. Ut nec tincidunt lacus. Nam at rutrum justo, vitae egestas dolor.',
                },
                {
                    id: 4,
                    title: 'Meeting',
                    start: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-12T10:30:00',
                    end: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-13T10:30:00',
                    className: 'danger',
                    description: 'Mauris ut mauris aliquam, fringilla sapien et, dignissim nisl. Pellentesque ornare velit non mollis fringilla.',
                },
                {
                    id: 5,
                    title: 'Lunch',
                    start: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-12T15:00:00',
                    end: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-13T15:00:00',
                    className: 'info',
                    description: 'Integer fermentum bibendum elit in egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
                },
                {
                    id: 6,
                    title: 'Conference',
                    start: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-12T21:30:00',
                    end: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-13T21:30:00',
                    className: 'success',
                    description:
                        'Curabitur facilisis vel elit sed dapibus. Nunc sagittis ex nec ante facilisis, sed sodales purus rhoncus. Donec est sapien, porttitor et feugiat sed, eleifend quis sapien. Sed sit amet maximus dolor.',
                },
                {
                    id: 7,
                    title: 'Happy Hour',
                    start: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-12T05:30:00',
                    end: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-13T05:30:00',
                    className: 'info',
                    description:
                        ' odio lectus, porttitor molestie scelerisque blandit, hendrerit sed ex. Aenean malesuada iaculis erat, vitae blandit nisl accumsan ut.',
                },
                {
                    id: 8,
                    title: 'Dinner',
                    start: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-12T20:00:00',
                    end: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-13T20:00:00',
                    className: 'danger',
                    description:
                        'Sed purus urna, aliquam et pharetra ut, efficitur id mi. Pellentesque ut convallis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
                {
                    id: 9,
                    title: 'Birthday Party',
                    start: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-27T20:00:00',
                    end: this.now.getFullYear() + '-' + this.getMonth(this.now) + '-28T20:00:00',
                    className: 'success',
                    description:
                        'Sed purus urna, aliquam et pharetra ut, efficitur id mi. Pellentesque ut convallis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
                {
                    id: 10,
                    title: 'New Talent Event',
                    start: this.now.getFullYear() + '-' + this.getMonth(this.now, 1) + '-24T08:12:14',
                    end: this.now.getFullYear() + '-' + this.getMonth(this.now, 1) + '-27T22:20:20',
                    className: 'danger',
                    description:
                        'Sed purus urna, aliquam et pharetra ut, efficitur id mi. Pellentesque ut convallis velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
                {
                    id: 11,
                    title: 'Other new',
                    start: this.now.getFullYear() + '-' + this.getMonth(this.now, -1) + '-13T08:12:14',
                    end: this.now.getFullYear() + '-' + this.getMonth(this.now, -1) + '-16T22:20:20',
                    className: 'primary',
                    description:
                        'Pellentesque ut convallis velit. Sed purus urna, aliquam et pharetra ut, efficitur id mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
                {
                    id: 13,
                    title: 'Upcoming Event',
                    start: this.now.getFullYear() + '-' + this.getMonth(this.now, 1) + '-15T08:12:14',
                    end: this.now.getFullYear() + '-' + this.getMonth(this.now, 1) + '-18T22:20:20',
                    className: 'primary',
                    description:
                        'Pellentesque ut convallis velit. Sed purus urna, aliquam et pharetra ut, efficitur id mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
            ];
            var calendarEl = document.getElementById('calendar');
            this.calendar = new FullCalendar.Calendar(calendarEl, {
                initialView: 'dayGridMonth',
                headerToolbar: {
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay',
                },
                editable: true,
                dayMaxEvents: true,
                selectable: true,
                droppable: true,
                eventClick: (event) => {
                    this.editEvent(event);
                },
                select: (event) => {
                    this.editDate(event);
                },
                events: this.events,
            });
            this.calendar.render();

            this.$watch('$store.app.sidebar', () => {
                setTimeout(() => {
                    this.calendar.render();
                }, 300);
            });
        },

        getMonth(dt, add = 0) {
            let month = dt.getMonth() + 1 + add;
            return dt.getMonth() < 10 ? '0' + month : month;
        },

        editEvent(data) {
            this.params = JSON.parse(JSON.stringify(this.defaultParams));
            if (data) {
                let obj = JSON.parse(JSON.stringify(data.event));
                this.params = {
                    id: obj.id ? obj.id : null,
                    title: obj.title ? obj.title : null,
                    start: this.dateFormat(obj.start),
                    end: this.dateFormat(obj.end),
                    type: obj.classNames ? obj.classNames[0] : 'primary',
                    description: obj.extendedProps ? obj.extendedProps.description : '',
                };
                this.minStartDate = new Date();
                this.minEndDate = this.dateFormat(obj.start);
            } else {
                this.minStartDate = new Date();
                this.minEndDate = new Date();
            }

            this.isAddEventModal = true;
        },

        editDate(data) {
            let obj = {
                event: {
                    start: data.start,
                    end: data.end,
                },
            };
            this.editEvent(obj);
        },

        dateFormat(dt) {
            dt = new Date(dt);
            const month = dt.getMonth() + 1 < 10 ? '0' + (dt.getMonth() + 1) : dt.getMonth() + 1;
            const date = dt.getDate() < 10 ? '0' + dt.getDate() : dt.getDate();
            const hours = dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours();
            const mins = dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes();
            dt = dt.getFullYear() + '-' + month + '-' + date + 'T' + hours + ':' + mins;
            return dt;
        },

        saveEvent() {
            if (!this.params.title) {
                return true;
            }
            if (!this.params.start) {
                return true;
            }
            if (!this.params.end) {
                return true;
            }

            if (this.params.id) {
                //update event
                let event = this.events.find((d) => d.id == this.params.id);
                event.title = this.params.title;
                event.start = this.params.start;
                event.end = this.params.end;
                event.description = this.params.description;
                event.className = this.params.type;
            } else {
                //add event
                let maxEventId = 0;
                if (this.events) {
                    maxEventId = this.events.reduce((max, character) => (character.id > max ? character.id : max), this.events[0].id);
                }

                let event = {
                    id: maxEventId + 1,
                    title: this.params.title,
                    start: this.params.start,
                    end: this.params.end,
                    description: this.params.description,
                    className: this.params.type,
                };
                this.events.push(event);
            }
            this.calendar.getEventSources()[0].refetch(); //refresh Calendar
            this.showMessage('Event has been saved successfully.');
            this.isAddEventModal = false;
        },

        startDateChange(event) {
            const dateStr = event.target.value;
            if (dateStr) {
                this.minEndDate = this.dateFormat(dateStr);
                this.params.end = '';
            }
        },

        showMessage(msg = '', type = 'success') {
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: type,
                title: msg,
                padding: '10px 20px',
            });
        },
    }));

    //contacts
    Alpine.data('contacts', () => ({
        defaultParams: {
            id: null,
            name: '',
            email: '',
            role: '',
            phone: '',
            location: '',
            specialty: '',
            person: '',
            website: '',
            mobile: '',
            fax: '',

        },
        displayType: 'list',
        addContactModal: false,
        params: {
            id: null,
            name: '',
            email: '',
            role: '',
            phone: '',
            location: '',
            specialty: '',
            person: '',
            website: '',
            mobile: '',
            fax: '',
        },
        filterdContactsList: [],
        searchUser: '',
        contactList: [ {
                id: 1,
                path: '',
                name: 'Al Tomouh IT Pvt Ltd',
                role: 'Web Developer',
                email: 'support@altomouhit.com',
                location: 'Muscat, Oman',
                phone: '+968 22060636',
                specialty: 'consulting and business',
                person: 'support',
                website: 'www.altomouhit.com',
                mobile: '+968 95235815',
                fax: '+968 22060636',
            }, {
                id: 2,
                name: 'Suhail Bahwan LLC',
                role: 'Web Developer',
                email: 'support@altomouhit.com',
                location: 'Muscat, Oman',
                phone: '+968 24650000',
                specialty: 'AUTOMOBILES',
                person: 'support',
                website: 'www.suhailbahwangroup.com',
                mobile: '+968 95235815',
                fax: '+968 24650000',
            }, {
                id: 3,
                path: '',
                name: 'ZabonEx',
                role: 'sales',
                email: 'info@zabonex.com',
                location: 'Muscat, Oman',
                phone: '+968 22060636',
                specialty: 'Products',
                person: 'support',
                website: 'www.zabonex.com',
                mobile: '+968 95235815',
                fax: '+968 22060636',
            }, {
                id: 4,
                path: '',
                name: 'Decoil',
                role: 'sales',
                email: 'info@decoil.co',
                location: 'Muscat, Oman',
                phone: '+968 93667705',
                specialty: 'Building AI solutions',
                person: 'support',
                website: 'www.decoil.co',
                mobile: '+968 93667705',
                fax: '+968 93667705',
            }, {
                id: 5,
                path: '',
                name: '360 Real Vista',
                role: 'Construction',
                email: 'info@360realvista.com',
                location: 'Muscat, Oman',
                phone: '+968 93667705',
                specialty: 'Construction',
                person: 'support',
                website: 'www.360realvista.com',
                mobile: '+968 93667705',
                fax: '+968 93667705',
            }, {
                id: 6,
                path: '',
                name: 'Al Tomouh IT LLC',
                role: 'Web Developer',
                email: 'support@altomouhit.com',
                location: 'Muscat, Oman',
                phone: '+968 22060636',
                specialty: 'Consulting and Business',
                person: 'support',
                website: 'www.altomouhit.com',
                mobile: '+968 95235815',
                fax: '+968 22060636',
            },
        ],

        init() {
            this.searchContacts();
        },

        searchContacts() {
            this.filterdContactsList = this.contactList.filter((d) => d.name.toLowerCase().includes(this.searchUser.toLowerCase()));
        },

        editUser(user) {
            this.params = this.defaultParams;
            if (user) {
                this.params = JSON.parse(JSON.stringify(user));
            }

            this.addContactModal = true;
        },

        saveUser() {
            if (!this.params.name) {
                this.showMessage('Name is required.', 'error');
                return true;
            }
            if (!this.params.email) {
                this.showMessage('Email is required.', 'error');
                return true;
            }
            if (!this.params.phone) {
                this.showMessage('Phone is required.', 'error');
                return true;
            }
            if (!this.params.role) {
                this.showMessage('Occupation is required.', 'error');
                return true;
            }

            if (this.params.id) {
                //update user
                let user = this.contactList.find((d) => d.id === this.params.id);
                user.name = this.params.name;
                user.email = this.params.email;
                user.role = this.params.role;
                user.phone = this.params.phone;
                user.location = this.params.location;
                user.specialty = this.params.specialty;
                user.person = this.params.person;
                user.website = this.params.website;
                user.mobile = this.params.mobile;
                user.fax = this.params.fax;
            } else {
                //add user
                let maxUserId = this.contactList.length
                    ? this.contactList.reduce((max, character) => (character.id > max ? character.id : max), this.contactList[0].id)
                    : 0;

                let user = {
                    id: maxUserId + 1,
                    path: '',
                    name: this.params.name,
                    email: this.params.email,
                    role: this.params.role,
                    phone: this.params.phone,
                    location: this.params.location,
                    specialty: this.params.specialty,
                    person: this.params.person,
                    website: this.params.website,
                    mobile: this.params.mobile,
                    fax: this.params.fax,
                };
                this.contactList.splice(0, 0, user);
                this.searchContacts();
            }

            this.showMessage('User has been saved successfully.');
            this.addContactModal = false;
        },

        deleteUser(user) {
            this.contactList = this.contactList.filter((d) => d.id != user.id);
            // this.ids = this.ids.filter((d) => d != user.id);
            this.searchContacts();
            this.showMessage('User has been deleted successfully.');
        },

        setDisplayType(type) {
            this.displayType = type;
        },

        showMessage(msg = '', type = 'success') {
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: type,
                title: msg,
                padding: '10px 20px',
            });
        },
    }));

    //committees
    Alpine.data('committees', () => ({
        defaultParams: {
            id: null,
            committeeID: '',
            name: '',
            purpose: '',
            date: '',
            registeredBy: '',
            head: '',
            members: '',

        },
        displayType: 'list',
        addCommitteesModal: false,
        params: {
            id: null,
            committeeID: '',
            name: '',
            purpose: '',
            date: '',
            registeredBy: '',
            head: '',
            members: '',
        },
        filterdCommitteesList: [],
        searchCommittee: '',
        committeesList: [ {
                id: 1,
                path: '',
                committeeID: '1',
                name: 'Al Tomouh IT Pvt Ltd',
                purpose: 'support',
                date: '2022-12-22',
                members: ['Member1', 'Member3', 'Member4'],
                registeredBy: 'User 1',
                head: 'User 2',
            }, {
                id: 2,
                committeeID: '2',
                name: 'Suhail Bahwan LLC',
                purpose: 'support',
                date: '2019-06-24',
                members: ['Member2', 'Member3', 'Member5'],
                registeredBy: 'User 1',
                head: 'User 3',
            }, {
                id: 3,
                path: '',
                committeeID: '3',
                name: 'ZabonEx',
                purpose: 'support',
                date: '2018-07-14',
                members: ['Member1', 'Member5', 'Member6'],
                head: 'User 1',
                registeredBy: 'User 1',
            }, {
                id: 4,
                path: '',
                committeeID: '4',
                name: 'Decoil',
                purpose: 'support',
                date: '2009-04-25',
                members: ['Member1', 'Member3', 'Member4'],
                registeredBy: 'User 1',
                head: 'User 6',
            }, {
                id: 5,
                path: '',
                committeeID: '5',
                name: '360 Real Vista',
                purpose: 'support',
                date: '2023-01-11',
                members: ['Member2', 'Member3', 'Member5'],
                registeredBy: 'User 1',
                head: 'User 4',
            }, {
                id: 6,
                path: '',
                committeeID: '6',
                name: 'Al Tomouh IT LLC',
                purpose: 'support',
                members: ['Member1', 'Member5', 'Member6'],
                date: '2022-01-03',
                head: 'User 5',
                registeredBy: 'User 1',
            },
        ],

        init() {
            this.searchCommittees();
        },

        searchCommittees() {
            this.filterdCommitteesList = this.committeesList.filter((d) => d.name.toLowerCase().includes(this.searchCommittee.toLowerCase()));
        },

        editCommittee(user) {
            this.params = this.defaultParams;
            if (user) {
                this.params = JSON.parse(JSON.stringify(user));
            }

            this.addCommitteesModal = true;
        },

        saveCommittee() {
            if (!this.params.name) {
                this.showMessage('Please enter Committee Name.', 'error');
                return true;
            }
            if (!this.params.head) {
                this.showMessage('Please select Committee head.', 'error');
                return true;
            }
            if (!this.params.members) {
                this.showMessage('Please select members.', 'error');
                return true;
            }
            if (!this.params.date) {
                this.showMessage('Please Enter Date.', 'error');
                return true;
            }

            if (this.params.id) {
                //update user
                let user = this.committeesList.find((d) => d.id === this.params.id);
                user.committeeID = this.params.committeeID;
                user.name = this.params.name;
                user.purpose = this.params.purpose;
                user.date = this.params.date;
                user.members= this.params.members;
                user.registeredBy = 'User 1';
                user.head = this.params.head;
            } else {
                //add user
                let maxUserId = this.committeesList.length
                    ? this.committeesList.reduce((max, character) => (character.id > max ? character.id : max), this.committeesList[0].id)
                    : 0;

                let user = {
                    id: maxUserId + 1,
                    path: '',
                    committeeID: maxUserId + 1,
                    name: this.params.name,
                    purpose: this.params.purpose,
                    date: this.params.date,
                    members: this.params.members,
                    registeredBy: 'User 1',
                    head: this.params.head,
                };
                this.committeesList.splice(0, 0, user);
                this.searchCommittees();
            }

            this.showMessage('User has been saved successfully.');
            this.addCommitteesModal = false;
        },

        deleteUser(user) {
            this.committeesList = this.committeesList.filter((d) => d.id != user.id);
            // this.ids = this.ids.filter((d) => d != user.id);
            this.searchCommittees();
            this.showMessage('User has been deleted successfully.');
        },

        setDisplayType(type) {
            this.displayType = type;
        },

        showMessage(msg = '', type = 'success') {
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: type,
                title: msg,
                padding: '10px 20px',
            });
        },
    }));

    //Sub committees
    Alpine.data('subCommittees', () => ({
        defaultParams: {
            id: null,
            committeeID: '',
            name: '',
            purpose: '',
            date: '',
            registeredBy: '',
            head: '',
            members: '',
            subCommitteeID: '',
            subCommitteeName: '',
        },
        displayType: 'list',
        addSubCommitteesModal: false,
        params: {
            id: null,
            committeeID: '',
            name: '',
            purpose: '',
            date: '',
            registeredBy: '',
            head: '',
            members: '',
            subCommitteeID: '',
            subCommitteeName: '',
        },
        filterdSubCommitteesList: [],
        searchUser: '',
        subCommitteesList: [ {
                id: 1,
                path: '',
                committeeID: '1',
                name: 'Al Tomouh IT Pvt Ltd',
                purpose: 'support',
                date: '2022-12-22',
                members: ['Member1', 'Member3', 'Member4'],
                registeredBy: 'User 1',
                head: 'User 2',
                subCommitteeID: '1',
                subCommitteeName: 'Sub Committee 1',
            }, {
                id: 2,
                committeeID: '2',
                name: 'Suhail Bahwan LLC',
                purpose: 'support',
                date: '2019-06-24',
                members: ['Member2', 'Member3', 'Member5'],
                registeredBy: 'User 1',
                head: 'User 3',
                subCommitteeID: '2',
                subCommitteeName: 'Sub Committee 2',
            }, {
                id: 3,
                path: '',
                committeeID: '3',
                name: 'ZabonEx',
                purpose: 'support',
                date: '2018-07-14',
                members: ['Member1', 'Member5', 'Member6'],
                registeredBy: 'User 1',
                head: 'User 1',
                subCommitteeID: '3',
                subCommitteeName: 'Sub Committee 3',
            }, {
                id: 4,
                path: '',
                committeeID: '4',
                name: 'Decoil',
                purpose: 'support',
                date: '2009-04-25',
                members: ['Member1', 'Member3', 'Member4'],
                registeredBy: 'User 1',
                head: 'User 6',
                subCommitteeID: '4',
                subCommitteeName: 'Sub Committee 4',
            }, {
                id: 5,
                path: '',
                committeeID: '5',
                name: '360 Real Vista',
                purpose: 'support',
                date: '2023-01-11',
                members: ['Member2', 'Member3', 'Member5'],
                registeredBy: 'User 1',
                head: 'User 4',
                subCommitteeID: '5',
                subCommitteeName: 'Sub Committee 5',
            }, {
                id: 6,
                path: '',
                committeeID: '6',
                name: 'Al Tomouh IT LLC',
                purpose: 'support',
                members: ['Member1', 'Member5', 'Member6'],
                date: '2022-01-03',
                registeredBy: 'User 1',
                head: 'User 5',
                subCommitteeID: '6',
                subCommitteeName: 'Sub Committee 6',
            },
        ],

        init() {
            this.searchSubCommittees();
        },

        searchSubCommittees() {
            this.filterdSubCommitteesList = this.subCommitteesList.filter((d) => d.name.toLowerCase().includes(this.searchUser.toLowerCase()));
        },

        editSubCommittees(user) {
            this.params = this.defaultParams;
            if (user) {
                this.params = JSON.parse(JSON.stringify(user));
            }

            this.addSubCommitteesModal = true;
        },

        saveSubCommittees() {
            if (!this.params.subCommitteeName) {
                this.showMessage('Please enter Sub Committee Name.', 'error');
                return true;
            }
            if (!this.params.head) {
                this.showMessage('Please select Committee head.', 'error');
                return true;
            }
            if (!this.params.members) {
                this.showMessage('Please select members.', 'error');
                return true;
            }
            if (!this.params.date) {
                this.showMessage('Please Enter Date.', 'error');
                return true;
            }

            if (this.params.id) {
                //update user
                let user = this.subCommitteesList.find((d) => d.id === this.params.id);
                user.committeeID = this.params.committeeID;
                user.name = this.params.name;
                user.purpose = this.params.purpose;
                user.date = this.params.date;
                user.members= this.params.members;
                user.registeredBy = 'User 1';
                user.head = this.params.head;
                user.subCommitteeID = this.params.subCommitteeID;
                user.subCommitteeName = this.params.subCommitteeName;
            } else {
                //add user
                let maxUserId = this.subCommitteesList.length
                    ? this.subCommitteesList.reduce((max, character) => (character.id > max ? character.id : max), this.subCommitteesList[0].id)
                    : 0;

                let user = {
                    id: maxUserId + 1,
                    path: '',
                    committeeID: maxUserId + 1,
                    name: this.params.name,
                    purpose: this.params.purpose,
                    date: this.params.date,
                    members: this.params.members,
                    registeredBy: 'User 1',
                    head: this.params.head,
                    subCommitteeID: maxUserId + 1,
                    subCommitteeName: this.params.subCommitteeName,
                };
                this.subCommitteesList.splice(0, 0, user);
                this.searchSubCommittees();
            }

            this.showMessage('User has been saved successfully.');
            this.addSubCommitteesModal = false;
        },

        deleteSubCommittees(user) {
            this.subCommitteesList = this.subCommitteesList.filter((d) => d.id != user.id);
            // this.ids = this.ids.filter((d) => d != user.id);
            this.searchSubCommittees();
            this.showMessage('User has been deleted successfully.');
        },

        setDisplayType(type) {
            this.displayType = type;
        },

        showMessage(msg = '', type = 'success') {
            const toast = window.Swal.mixin({
                toast: true,
                position: 'top',
                showConfirmButton: false,
                timer: 3000,
            });
            toast.fire({
                icon: type,
                title: msg,
                padding: '10px 20px',
            });
        },
    }));
});