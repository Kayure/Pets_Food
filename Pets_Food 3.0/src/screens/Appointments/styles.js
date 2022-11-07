import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#63C2D1',
        alignItems: 'center',
        
        borderTopWidth: 5,
        borderBottomWidth: 5,
    },
    header: {
        width: '100%',
        height: 90,
        backgroundColor: '#268596',
       
        borderBottomWidth: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
    },

    subTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        
    },
    input: {
        width: '90%',
        borderColor: '#333',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 5,
        textAlign: 'center',
        marginBottom: 15,
    },
    textDate: {
        color: '#000', 
        fontSize: 21, 
        fontWeight: 'bold',
        marginBottom: 15,
    },
    touch: {
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#268596',
        borderRadius: 12,
        marginBottom: 20,
    },
    touchText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFF',
    },
    list: {
        width: '90%',
        borderColor: '#333',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        paddingTop: 15,
        marginBottom: 15, 
    },
    listItem: {
        flex:1,
        width: '100%',
        height:'100%',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 10, 
    },
    textListItem: {
        alignSelf: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
})

export default styles