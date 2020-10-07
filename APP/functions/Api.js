import 'isomorphic-fetch';
export class Api{
    static getApiUrl(){
        return "http://localhost:3000/";
    }
    //AUTH
    static authGet(token, url){
        let promise = new Promise((resolve)=>{
            fetch(this.getApiUrl() + url,
            {
                headers: {
                    'token': token 
                },
                method: 'GET'
            }).then((response)=>{
                if(response.status != 401){
                    let contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1){
                        return new Promise((resolve)=>{
                            response.json().then((json)=>{
                                resolve({status: response.status, json});
                            });
                        });
                    }else{
                        return new Promise((resolve)=>{
                            resolve({status: response.status, json: ""});
                        });
                    }
                }else{
                    window.location.href = "/login";
                    return new Promise((resolve)=>{
                        resolve({status: response.status, json: ""});
                    });
                }
            }).then((response)=>{
                resolve(response);
            });
        });
        return promise;
    }

    static authDelete(token, url){
        let promise = new Promise((resolve)=>{
            fetch(this.getApiUrl() + url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                method: 'DELETE'
            }).then((response)=>{
                if(response.status != 401){
                    let contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1){
                        return new Promise((resolve)=>{
                            response.json().then((json)=>{
                                resolve({status: response.status, json});
                            });
                        });
                    }else{
                        return new Promise((resolve)=>{
                            resolve({status: response.status, json: ""});
                        });
                    }
                }else{
                    window.location.href = "/login";
                    return new Promise((resolve)=>{
                        resolve({status: response.status, json: ""});
                    });
                }
            }).then((response)=>{
                resolve(response);
            });
        });
        return promise;
    }

    static authPost(token, url, data){
        let promise = new Promise((resolve)=>{
            fetch(this.getApiUrl() + url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                method: 'POST',
                body: JSON.stringify(data)
            }).then((response)=>{
                if(response.status != 401){
                    let contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1){
                        return new Promise((resolve)=>{
                            response.json().then((json)=>{
                                resolve({status: response.status, json});
                            });
                        });
                    }else{
                        return new Promise((resolve)=>{
                            resolve({status: response.status, json: ""});
                        });
                    }
                }else{
                    window.location.href = "/login";
                    return new Promise((resolve)=>{
                        resolve({status: response.status, json: ""});
                    });
                }
            }).then((response)=>{
                resolve(response);
            });
        });
        return promise;
    }

    static authPostFiles(token, url, data){
        let promise = new Promise((resolve)=>{
            fetch(this.getApiUrl() + url,
            {
                headers: {
                    'token': token 
                },
                method: 'POST',
                body: data
            }).then((response)=>{
                if(response.status != 401){
                    let contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1){
                        return new Promise((resolve)=>{
                            response.json().then((json)=>{
                                resolve({status: response.status, json});
                            });
                        });
                    }else{
                        return new Promise((resolve)=>{
                            resolve({status: response.status, json: ""});
                        });
                    }
                }else{
                    window.location.href = "/login";
                    return new Promise((resolve)=>{
                        resolve({status: response.status, json: ""});
                    });
                }
            }).then((response)=>{
                resolve(response);
            });
        });
        return promise;
    }

    static authPut(token, url, data){
        let promise = new Promise((resolve)=>{
            fetch(this.getApiUrl() + url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                method: 'PUT',
                body: JSON.stringify(data)
            }).then((response)=>{
                if(response.status != 401){
                    let contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1){
                        return new Promise((resolve)=>{
                            response.json().then((json)=>{
                                resolve({status: response.status, json});
                            });
                        });
                    }else{
                        return new Promise((resolve)=>{
                            resolve({status: response.status, json: ""});
                        });
                    }
                }else{
                    window.location.href = "/login";
                    return new Promise((resolve)=>{
                        resolve({status: response.status, json: ""});
                    });
                }
            }).then((response)=>{
                resolve(response);
            });
        });
        return promise;
    }  

    static authPatch(token, url, data){
        let promise = new Promise((resolve)=>{
            fetch(this.getApiUrl() + url,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'token': token
                },
                method: 'PATCH',
                body: JSON.stringify(data)
            }).then((response)=>{
                if(response.status != 401){
                    let contentType = response.headers.get("content-type");
                    if (contentType && contentType.indexOf("application/json") !== -1){
                        return new Promise((resolve)=>{
                            response.json().then((json)=>{
                                resolve({status: response.status, json});
                            });
                        });
                    }else{
                        return new Promise((resolve)=>{
                            resolve({status: response.status, json: ""});
                        });
                    }
                }else{
                    window.location.href = "/login";
                    return new Promise((resolve)=>{
                        resolve({status: response.status, json: ""});
                    });
                }
            }).then((response)=>{
                resolve(response);
            });
        });
        return promise;
    }    

    //NO AUTH
    static get(url){
        let promise = new Promise((resolve)=>{
            fetch(this.getApiUrl() + url,
            {
                method: 'GET'
            }).then((response)=>{
                let contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1){
                    return new Promise((resolve)=>{
                        response.json().then((json)=>{
                            resolve({status: response.status, json});
                        });
                    });
                }else{
                    return new Promise((resolve)=>{
                        resolve({status: response.status, json: ""});
                    });
                }
            }).then((response)=>{
                resolve(response);
            });
        });
        return promise;
    }

    static delete(url){
        let promise = new Promise((resolve)=>{
            fetch(this.getApiUrl() + url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'DELETE'
            }).then((response)=>{
                let contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1){
                    return new Promise((resolve)=>{
                        response.json().then((json)=>{
                            resolve({status: response.status, json});
                        });
                    });
                }else{
                    return new Promise((resolve)=>{
                        resolve({status: response.status, json: ""});
                    });
                }
            }).then((response)=>{
                resolve(response);
            });
        });
        return promise;
    }

    static post(url, data){
        let promise = new Promise((resolve)=>{
            fetch(this.getApiUrl() + url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data)
            }).then((response)=>{
                let contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1){
                    return new Promise((resolve)=>{
                        response.json().then((json)=>{
                            resolve({status: response.status, json});
                        });
                    });
                }else{
                    return new Promise((resolve)=>{
                        resolve({status: response.status, json: ""});
                    });
                }
            }).then((response)=>{
                resolve(response);
            });
        });
        return promise;
    }

    static postFiles(url, data){
        let promise = new Promise((resolve)=>{
            fetch(this.getApiUrl() + url,
            {
                method: 'POST',
                body: data
            }).then((response)=>{
                let contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1){
                    return new Promise((resolve)=>{
                        response.json().then((json)=>{
                            resolve({status: response.status, json});
                        });
                    });
                }else{
                    return new Promise((resolve)=>{
                        resolve({status: response.status, json: ""});
                    });
                }
            }).then((response)=>{
                resolve(response);
            });
        });
        return promise;
    }

    static put(url, data){
        let promise = new Promise((resolve)=>{
            fetch(this.getApiUrl() + url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify(data)
            }).then((response)=>{
                let contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1){
                    return new Promise((resolve)=>{
                        response.json().then((json)=>{
                            resolve({status: response.status, json});
                        });
                    });
                }else{
                    return new Promise((resolve)=>{
                        resolve({status: response.status, json: ""});
                    });
                }
            }).then((response)=>{
                resolve(response);
            });
        });
        return promise;
    }  

    static patch(url, data){
        let promise = new Promise((resolve)=>{
            fetch(this.getApiUrl() + url,
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PATCH',
                body: JSON.stringify(data)
            }).then((response)=>{
                let contentType = response.headers.get("content-type");
                if (contentType && contentType.indexOf("application/json") !== -1){
                    return new Promise((resolve)=>{
                        response.json().then((json)=>{
                            resolve({status: response.status, json});
                        });
                    });
                }else{
                    return new Promise((resolve)=>{
                        resolve({status: response.status, json: ""});
                    });
                }
            }).then((response)=>{
                resolve(response);
            });
        });
        return promise;
    }    
}