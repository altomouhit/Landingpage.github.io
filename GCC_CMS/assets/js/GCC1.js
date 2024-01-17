document.addEventListener('alpine:init', () => {
    //committeeTree
    Alpine.data('committeeTree', () => ({
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
                title: 'Al Tomouh IT Pvt Ltd',
                thumb: 'userProfile/profile-1.jpg',
                description: 'Description Discussion 1',
                date: '1 Jan 2024',
                user: 'User Name 1',
                reply: '6 Members',
                messages: [{
                        fromUserId: 0,
                        toUserId: 1,
                        text: 'Hi, I am back from vacation',
                    },
                ],
                active: true,
            }, {
                id: 2,
                title: 'Suhail Bahwan LLC',
                thumb: 'userProfile/profile-2.jpg',
                description: 'Description Discussion 2',
                date: '2 Jan 2024',
                user: 'User Name 2',
                reply: '4 Members',
                messages: [ {
                        fromUserId: 0,
                        toUserId: 2,
                        text: 'Hello',
                    },
                ],
                active: false,
            }, {
                id: 3,
                title: 'ZabonEx',
                thumb: 'userProfile/sri.jpg',
                description: 'Description Discussion 3',
                date: '3 Jan 2024',
                user: 'User Name 3',
                reply: '6 Members',
                messages: [{
                        fromUserId: 0,
                        toUserId: 3,
                        text: 'Hey Buddy.',
                    },
                ],
                active: true,
            }, {
                id: 4,
                title: 'Decoil',
                thumb: 'userProfile/satish.jpg',
                description: 'Description Discussion 4',
                date: '4 Jan 2024',
                user: 'User Name 4',
                reply: '2 Members',
                messages: [{
                        fromUserId: 0,
                        toUserId: 4,
                        text: 'Hi, collect your check',
                    },
                ],
                active: false,
                call: true,
            }, {
                id: 5,
                title: '360 Real Vista',
                thumb: 'userProfile/vinod.jpg',
                description: 'Description Discussion 5',
                date: '3 Jan 2024',
                user: 'User Name 5',
                reply: '5 Members',
                messages: [{
                        fromUserId: 0,
                        toUserId: 5,
                        text: 'Hi, I am back from vacation',
                    },
                ],
                active: false,
                away: true,
            }, {
                id: 6,
                title: 'Al Tomouh IT LLC',
                thumb: 'userProfile/santosh.jpg',
                description: 'Description Discussion 6',
                date: '3 Jan 2024',
                user: 'User Name 6',
                reply: '4 Members',
                messages: [
                    {
                        fromUserId: 0,
                        toUserId: 6,
                        text: 'Hi',
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
                    reply: '0 Members',
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
});