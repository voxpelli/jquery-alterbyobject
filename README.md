alterByObject.js
=======

alterByObject.js is a jQuery plugin for modifying your page in a way defined by an object that you can have received from eg. an ajax request.

## Usage

### Simple

    $('.list').alterByObject([{
      selector : '.user',
      addClass : 'new-class'
    }]);

That will add the class "new-class" to all elements in ".list" that matches ".user"

### Advanced

    $('.list').alterByObject([{
      selector : '.user',
      has : 'a[href="http://example.com/profile/foobar"]'
      addClass : 'removed',
      targets : [{
        selector : 'a.unfollow',
        removeClass : 'unfollow',
        addClass : 'follow',
      }]
    },
    {
      selector : 'h1',
      addClass : 'updated'
    }]);

That will add the class "removed" to all elements in ".list" that matches ".user" and that has a child that matches "a[href="http://example.com/profile/foobar"]". It will also change the class "unfollow" to "follow" on the "a.unfollow" element within the ".user" element. In addition to all of that it will add the class 'updated' to all "h1" elements.

## Target options

* **selector** - a selector for matching the elements that the target want to modify
* **has** - a check to make sure that only elements containing the right stuff is modified
* **addClass** - a class to add
* **removeClass** - a class to remove
* **text** - a text to change the elements text to
* **content** - HTML content to replace the elements with
* **attr** - an object with attributes that should be changed
* **targets** - an array of additional targets within this target that should be modified

## In action on

* **Flattr.com**
