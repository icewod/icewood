Ice.removeStart("abc","a")
"bc"
Ice.removeStart("abc","abc")
""
Ice.removeStart("abc","abcd")
"abc"
Ice.removeStart("abc","ab")
"c"
Ice.removeStart("abcdefg","abc")
"defg"
Ice.removeStart("abcdefg","abcdef")
"g"

Ice.removeEnd("abcdefg","g")
"abcdef"
Ice.removeEnd("abcdefg","")
"abcdefg"
Ice.removeEnd("abcdefg","efg")
"abcd"
Ice.removeEnd("abcdefg","cdefg")
"ab"
Ice.removeEnd("abcdefg","bcdefg")
"a"
Ice.removeEnd("abcdefg","abcdefg")
""
Ice.removeEnd("abcdefg","abcdefga")
"abcdefg"
Ice.removeEnd("abcdefg","abcdefgazz")
"abcdefg"
Ice.removeEnd("abcdefg","abc")
"abcdefg"

Ice.splitTrim("    abc     ,   def        ,xyz,qwe    ,    \tzzzz")


