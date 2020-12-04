
// implementation using linked list

class node 
{
    constructor(value)
    {
        this.value = value
        this.next = null
    }
}

class stacks 
{
    constructor(value)
    {
        let newNode = new node(value)
        this.top = newNode
        this.head = newNode
        
    }
    
    isEmpty()
    {
        return this.top.value == null
    }

    push(value) 
    {
        let newNode = new node(value)
        if(this.isEmpty())
        {
            this.head = newNode;
            this.head.next = null
        }
        this.top.next = newNode
        this.top = newNode
    }

    pop()
    {
        if (this.isEmpty())
        {
            return null
        }

        let tempNode = this.head
        let beforeNode = new node(null)
        while(tempNode.next != null)
        {
            beforeNode = tempNode
            tempNode = tempNode.next
        }
        beforeNode.next = null
        this.top = beforeNode
        return tempNode
    }
}

// implementation using arrays


